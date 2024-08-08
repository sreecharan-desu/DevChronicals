const express = require('express');
const { Account } = require('../db/db');
const { auth_middleware } = require('./middlewares');
const accountRouter = express.Router();

accountRouter.get('/balance',auth_middleware,async(req,res)=>{

    const account = await Account.findOne({
        userId : `${req.userId}`
    })
    
    res.json({
        balance : account.balance
    })
});


module.exports = accountRouter;