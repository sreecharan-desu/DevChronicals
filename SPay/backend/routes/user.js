const express = require('express');
const zod = require('zod');

const userRouter = express.Router();
const {User, Account} = require('../db/db');
const { ValidateInputs, fetchuser, findUser, auth_middleware } = require('./middlewares');
const { JWT_SECRET } = require('../config');
const jwt = require('jsonwebtoken');
const { mongoose } = require('mongoose');

userRouter.post('/signup',ValidateInputs,fetchuser,async (req,res)=>{

    const {username,firstname,lastname,password} = req.body;

    //hash password...

    const user = await User.create({
        Username : username,
        FirstName : firstname,
        LastName : lastname,
        Password : password
    })


    await Account.create({
        userId : user._id,
        balance : Math.random(10000)*10000
    })


    res.status(200).json({
        msg : `Account created for user with userId ${user._id}`,
    })

})

userRouter.post('/signin',ValidateInputs,findUser,async (req,res)=>{
    try{
        const token = jwt.sign(`${req.userId}`,JWT_SECRET);
        res.status(200).json({
            success : true,
            token
        })
    }
    catch(e){
        res.status(200).json({
            msg : `Error`,
            success : false
        })
    }
})


userRouter.post('/bulk',auth_middleware,async(req,res)=>{

    const filter  = req.query.filter || "";

    const current_user = await User.findOne({
        _id : req.userId
    })

    const users = await User.find({
        $or : [
            {Username : {"$regex" : filter }},
            {FirstName : {"$regex" : filter }},
            {LastName : {"$regex" : filter}
        }]
    })

    let list_of_users = [];
    // console.log(req.userId)
    for(let i = 0;i < users.length;i++){
        if(users[i]._id == req.userId)
            continue
        else
            list_of_users = [...list_of_users,
            {
                _id : users[i]._id,
                username : users[i].Username
            }
    ]
    }

    res.json({
        list_of_users,
        current_user : {
            _id : current_user._id,
            username : current_user.Username
        }
    })
})

userRouter.put('/update',ValidateInputs,auth_middleware,async(req,res)=>{

    const {username,firstname,lastname,password} = req.body;

    const user = await User.updateOne(
    {_id : `${req.userId}`},
    {
        Username : username,
        FirstName : firstname,
        LastName : lastname,
        Password : password
    }) 
    
    res.status(200).json({
        msg : "details updated succesfully..."
    })

});

userRouter.post('/transfer',auth_middleware,async(req,res)=>{
    const session = await mongoose.startSession();
    await session.startTransaction();

    const {amount , to}  = req.body;
    const fromAcc = await Account.findOne({userId : req.userId}).session(session);
    if(!fromAcc || fromAcc.balance < amount){
        await session.abortTransaction();
        return res.json({
            msg : "Insufficient funds"
        })
    }

    const toAccount =  await Account.findOne({userId : to}).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.json({
            message : "Invalid Account"
        })
    }

    await Account.updateOne({userId : req.userId},{$inc : {balance : -amount }}).session(session);
    await Account.updateOne({userId : to},{$inc : {balance : amount }}).session(session);

    await session.commitTransaction();
    session.endSession();

    res.json({
        message : "Transaction Successfull",
        success : true
    })
})
module.exports = userRouter