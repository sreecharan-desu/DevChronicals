const express = require('express');
const cors = require('cors');
const {InputValidation} = require('./zod');
const {addUser,signInUSer,addTodo,updateTodo,deleteTodo,DummyAuthUser} = require('./middlewares/user/user');
const {addAdmin,signInAdmin,removeUser,DummyAuthAdmin} = require('./middlewares/admin/admin');
const { Users , Admin , Todos } = require('./db/db')

const app = express();
app.use(express.json());
app.use(cors());

const _PORT_ = 5000;

//user-routes
app.post('/user/signup',InputValidation,async (req,res)=>{
    const { username , password } = req.body;
    const response = await addUser(username,password);
    if(response == 1){
        res.json({ Msg : "Signed up Successfully" })
    }
    else if(response == 0){
        res.json({Msg : "Seems like yoou already have an accout Signin!"})
    }
    else if(response == -1){
        res.json({Msg : "Username is already taken Try a new One!"})
    }
})

app.post('/user/signin',InputValidation,async (req,res)=>{
    const { username, password } = req.body;
    const response = await signInUSer(username,password);
    if(response){
        res.json({
            Msg : "Signed in Sucessfully"
        })
    }
    else{
        res.json({
            Msg : "Check your Credentials"
        })
    }
})

app.post('/user/addtodo',DummyAuthUser,async (req,res)=>{
    const { username, password, title, description } = req.body;
    await addTodo(username,password,title,description);
    res.json({
        Msg : "Todo added Sucessfully"
    })
})

app.put('/user/updatetodo',DummyAuthUser,async (req,res)=>{
    const {title, description,TodoID } = req.body;
    await updateTodo(title, description,TodoID);
    res.json({
        Msg : "Todo updated Sucessfully"
    })
})

app.post('/user/deletetodo',DummyAuthUser,async (req,res)=>{
    const { username, password,TodoID} = req.body;
    const response = await deleteTodo(TodoID,username,password);
    if(response == -1){
        res.json({
            Msg : "Invalid TodoId"
        })
    }
    else{
        res.json({
            Msg : "Todo deleted Sucessfully"
        })
    }
})

//admin-routes
app.post('/admin/signup',InputValidation,async (req,res)=>{
    const { username, password } = req.body;
    const response = await addAdmin(username,password);
    if(response == 1){
        res.json({ Msg : "Signed up Successfully" })
    }
    else if(response == 0){
        res.json({Msg : "Seems like yoou already have an accout Signin!"})
    }
    else if(response == -1){
        res.json({Msg : "Username is already taken Try a new One!"})
    }
})

app.post('/admin/signin',InputValidation,async (req,res)=>{
    const { username, password } = req.body;
    const response = await signInAdmin(username,password);
    if(response){
        res.json({
            Msg : "Signed in Sucessfully"
        })
    }
    else{
        res.json({
            Msg : "Check your Credentials"
        })
    }
});

app.get('/admin/users',DummyAuthAdmin,async (req,res)=>{
    let users = await Users.find();
    res.json({
        users
    })
})

app.delete('/admin/removeuser',DummyAuthAdmin,async (req,res)=>{
    const {usr_username} = req.body;
    let response = await removeUser(usr_username);  // returns two values (1 and null) `null if user not found` 
    if(response){
        res.json({ Msg : "User removed successfully" })
    }
    else if(response == null){
        res.json({ Msg : "User not found" })
    }
})

//global-catches
app.use((err,req,res,next)=>{
    if(err){
        console.log(err)
    }
    console.log("You've got messed up!")
})

app.listen(_PORT_,()=>{
    console.log("Listening...")
})