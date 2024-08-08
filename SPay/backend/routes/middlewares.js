const zod = require('zod');
const jwt = require('jsonwebtoken')
const {User} = require('../db/db');
const { JWT_SECRET } = require('../config');

function ValidateInputs(req,res,next){
    const {username,firstname,lastname,password} = req.body;
    const usernameSchema = zod.string().min(2).max(10);
    const firstNameSchema = zod.string().min(2).max(10);
    const LastNameSchema = zod.string().min(2).max(10);
    const passwordSchema= zod.string().min(2).max(10);

    if(firstNameSchema.safeParse(firstname).success && LastNameSchema.safeParse(lastname).success && usernameSchema.safeParse(username).success && passwordSchema.safeParse(password).success){
        next()
    }
    else if(firstname == null || lastname == null){
        if(usernameSchema.safeParse(username).success && passwordSchema.safeParse(password).success)
            next()
    }
    else{
        res.json({
            msg : "Invalid Inputs"
        })
    }
}

async function fetchuser(req,res,next){
    const {username} = req.body;
    const user = await User.findOne({
        Username  : username
    })
    if(user){
        res.status(201).send(
            `${username} is alreay taken try a new one!`
        )
    }
    else{
        next()
    }
}


const auth_middleware = async(req,res,next)=>{
    const token = req.headers.token;
    try{
        const verified = jwt.verify(token,JWT_SECRET);
        if(verified){
            req.userId = verified
            next()
        }   
    }catch(e){
        res.status(411).json({
            msg : "Invalid token Authentication Failed !"
        })
    }


}
async function findUser(req,res,next){
    const {username,password} = req.body;

    console.log(req.body)
    const user = await User.findOne({
        Username : username,
        Password : password
    })
    console.log(user)
    if(user){
        req.userId = user._id
        next()
    }
    else{
        res.json({
            msg : "Can't find user with this credentials"
        })
    }
}


module.exports = {
    fetchuser,
    ValidateInputs,
    auth_middleware,
    findUser
}