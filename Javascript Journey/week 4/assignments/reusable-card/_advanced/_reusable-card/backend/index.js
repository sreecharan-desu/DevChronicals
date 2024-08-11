// Import required libraries
const express = require('express'); // Express framework for building web applications
const cors = require('cors'); // CORS middleware for enabling cross-origin resource sharing
const { ValidateInputs } = require('./middlewares/commonmiddlewares'); // Custom middleware for input validation
const { IfUserBeforeSignup, IfUserBeforeSignin, AuthUser, UserDBFetch } = require('./middlewares/usermiddlewares'); // Custom middlewares for user actions
const { IfAdminBeforeSignup, ADminDBFetch, AuthAdmin } = require('./middlewares/adminmiddlewares'); // Custom middlewares for admin actions
const { returnJwt } = require('./jwt/jwt'); // JWT functions for authentication
const { addCard, getUserState, deleteCard, addAdmin, editCard, removeUser } = require('./helperFNS/helperFNs'); // Helper functions for application logic
const { User, Cards } = require('./database/db'); // Database models

// Initialize Express application
const app = express();

// Middleware configurations
app.use(express.json()); // Middleware to parse incoming JSON requests
app.use(cors()); // Middleware to enable CORS for all routes

// Constants
const PORT = 5000; // Port number for the server


//coding the routes
//a route for user to signup or create a new account
app.post('/users/signup',  ValidateInputs, IfUserBeforeSignup,  async (req,  res)=>{
    //getting the username and password from body (actually not a good idea );
    const {username, password} = req.body;
    //adding user to database
    await User.create({
        Username : username,
        Password : password
    })
    res.json({
        msg : `Account with username ${username} created successfully..`
    })
});


//a route for user to signin or login to account
app.post('/users/signin',  ValidateInputs, IfUserBeforeSignin,  async (req,  res)=>{
    //getting the username and password from body (actually not a good idea );
    const {username} = req.body;
    //generating a scured jwt key for user for futher server requests to check-in
    const key = await returnJwt(username);
    //sending the key to user (actually need to send to the headers)
    res.json({
        key
    })
});

//a route to add cards containing => { title, description, linkedin, twitter, intrests} 
app.post('/users/addcard',ValidateInputs,UserDBFetch,AuthUser,async(req,res)=>{
    const { title, description, linkedin, twitter, intrests,username} = req.body;
    //adding card after authentication  
    addCard(title, description, linkedin, twitter, intrests,username);
    res.json({
        msg : `Card Added Successfully`
    })
});


app.post('/users/state',ValidateInputs,UserDBFetch,AuthUser,async(req,res)=>{
    //getting the username from the body
    const{username} = req.body;
    //This function will return the current_user state or required userstate provided the username via body
    const userState = await getUserState(username);
    //returning the userState
    res.json({
        userState
    })
});


app.delete('/users/deletecard',ValidateInputs,UserDBFetch,AuthUser,async(req,res)=>{
    //getting the id of the card that is to be deleted
    const {cardId} = req.query;
    const {username} = req.body;
    //deleting the card
    const response = await deleteCard(cardId,username);
    if(response)
        res.json({
            msg : "Card deleted successfully"
        })
    else
        res.json({
            msg : "Card not found"
        })
});

app.post('/admin/signup' ,ValidateInputs, IfAdminBeforeSignup,async(req,res)=>{
    const {username,password} = req.body;

    //this function adds the admin to the database
    await addAdmin(username,password);

    res.json({
        Msg : `Admin with username ${username} created successfully..`
    })
    
});

app.post('/admin/signin',  ValidateInputs, ADminDBFetch,async(req,res)=>{
    const {username} = req.body;
    const key = await returnJwt(username); 

    res.json({
        key
    })
    
});


app.get('/admin/getusers',ValidateInputs,ADminDBFetch,AuthAdmin,async(req,res)=>{
    const users = await User.find();
    const UserData = [];
    for(let i = 0; i < users.length;i++){
        UserData.push(await getUserState(users[i].Username))
    }
    res.json({
        UserData
    })
});

//edits the info in the cards and updates the cards in the database
app.put('/admin/editcards',ValidateInputs,ADminDBFetch,AuthAdmin,async(req,res)=>{
    const { title, description, linkedin, twitter, intrests} = req.body;
    const {cardId} = req.query;
    try{
        await Cards.findOne({
            _id : cardId
        })   
        await editCard(cardId,title, description, linkedin, twitter, intrests);  
        res.json({
            Msg : "card edited successfully.."
        }) 
    }
    catch(e){
        res.json({
            Msg : "Card Not Found (Invalid CardId)"
        })
    }
});

//removes the user based on the username along with the cards of the particular user
app.delete('/admin/removeuser',ValidateInputs,ADminDBFetch,AuthAdmin,async(req,res)=>{
    const {username} = req.query;
    try{
        const user = await User.findOne({
            Username : username
        })    
        await removeUser(username,user);
        res.json({
            Msg : "User removed successfully.."
        })
    }
    catch(e){
        res.json({
            Msg : "User not found"
        })
    }
});

//global-catches or (err first middleware) to catch any errros from the code
app.use((err, req, res, next)=>{
    res.json({
        msg : "Something got messed up!"
    })
});

//a route for listening...
app.listen(PORT, ()=>{
    console.log(`Listening on port number ${PORT}...`);
});