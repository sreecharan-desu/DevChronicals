const { User } = require('../database/db')
const { decodeJwt,_MY_SECRET_KEY} = require('../jwt/jwt')

const jwt = require('jsonwebtoken');

async function IfUserBeforeSignup(req,res,next){
    const {username,password} = req.body;

    const user = await User.findOne({
        Username : username
    })

    if(user)
        if( (user.Username === username ) && !(user.Password === password ) )
            res.json({ msg : `${username} is already taken try a new one` })
        else    
            res.json({ msg : "Seems like you already have an account try signing in.." })
    else if(user == null)
        next()
}

async function IfUserBeforeSignin(req,res,next){
    const {username,password} = req.body;

    const user = await User.findOne({
        Username : username,
        Password : password
    })

    if(user)
        next()
    else    
        res.json({ msg : "Check your username & Password " })
}


async function UserDBFetch(req,res,next){
    const {username,password} = req.body;

    const user = await User.findOne({
        Username : username,
        Password : password
    })

    if(user)
        next()
    else    
        res.json({ msg : "User not found in database" })
}

async function AuthUser(req,res,next){
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


module.exports = {
    IfUserBeforeSignup,
    IfUserBeforeSignin,
    AuthUser,
    UserDBFetch
}