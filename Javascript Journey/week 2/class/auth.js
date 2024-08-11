const express = require('express')
const jwt = require('jsonwebtoken')
const app = express();
const mySecretKey = '#$%^&'

app.use(express.json())

//in-memory users

const ALL_USERS = [

    {
        username : 'SreeCharan309@gmail.com',
        password : '1234'
    },  
    {
        username : 'Sree309@gmail.com',
        password : '12424'
    },
    {
        username : 'Sreehitha309@gmail.com',
        password : '124354'
    }

]


function FindUser(usr, pwd){
    let foundUser = false
    for ( let i = 0; i < ALL_USERS.length ; i++){
        if(ALL_USERS[i].username == usr && ALL_USERS[i].password == pwd){
            foundUser = true
        }
    }
    return foundUser;
}

app.post('/signin',function(req, res){
    username = req.body.username;
    password = req.body.password;

    userFound = FindUser(username,password);

    if(userFound){
        let token = jwt.sign({username} , mySecretKey);
        res.json({
            token
        })
    }
    else{
        res.json({
            msg : "Sorry user not found Auth Failed"
        })
    }
})


app.get('/users',function(req, res){

    let token = req.headers.authorization;
    let verified = jwt.verify(token,mySecretKey);

    let newArray = ALL_USERS.filter(function(value){
        if(value.username == verified.username){
            return false
        }
        else{
            return true
        }
    })
    res.json({
        newArray
    })
})



app.use(function(err, req,res,next){
    console.log("Something have messed up")
    next();
})

app.listen(3000,()=>{
    console.log("Listening...")
});