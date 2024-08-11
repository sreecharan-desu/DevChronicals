const {Admin} = require('../database/db');
const {decodeJwt, _MY_SECRET_KEY} = require('../jwt/jwt');
const jwt = require('jsonwebtoken');


async function IfAdminBeforeSignup(req,res,next){
    const {username,password} = req.body;
    const admin = await Admin.findOne({
        Username : username
    })
    if(admin){
        if(admin.Username == username){
            if(admin.Password == password){
                res.json({
                    msg : "Seems like you are already an admin ! Signin"
                })
            }
            else{
                res.json({
                    msg : `${username} is already taken try a newone !`
                })
            }
        }
    }
    else{
        next();
    }
}


async function ADminDBFetch(req,res,next){
    const {username,password} = req.body;

    const admin = await Admin.findOne({
        Username : username,
        Password : password
    })

    if(admin){
        next();
    }
    else{
        res.json({
            Msg : "Dear admin Check username and password!"
        })
    }
}

async function AuthAdmin(req,res,next){
    const {username} = req.body;
    const {key} = req.headers;

    const currentUser_username = username;
    const payload = await decodeJwt(key);

    try{
        if(jwt.verify(key,_MY_SECRET_KEY))
            ((currentUser_username === payload)) ?
                 next() : 
            res.json({
                 msg : "Auth failed Invalid Token" 
            });
    }
    catch(e){
        res.json({
            msg : "Key verification failed"
        })
    }
}

module.exports= {
    IfAdminBeforeSignup,
    ADminDBFetch,
    AuthAdmin
}