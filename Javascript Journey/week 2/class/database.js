const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const zod = require('zod');
const app = express();
const jwtPassword = "$%&*%&*";
app.use(express.json());



mongoose.connect(
        "mongodb+srv://srecharandesu:charan%402006@cluster0.a9berin.mongodb.net/"
) 

const user = mongoose.model('users' , { Email : String , Password : String});


const schemaForObj = zod.object({
    email : zod.string().email(),
    password : zod.string().min(8).and(zod.string().max(10))
})

function validateInputs(obj){
    let result = schemaForObj.safeParse(obj);
    return result.success;
}


app.post('/signup' , async function(req,res){

    email = req.body.email;
    password = req.body.password;
    let validation = validateInputs({email , password}); 

    if(validation){
        
          let findUSer =  await user.findOne({Email : email});

            if(findUSer){
                res.json({
                    msg : "You Already have an account Signin!"
                })
            }
            else{

                const User = new user({
                    Email : email,
                    Password : password
                })

                User.save();
                res.json({
                    msg : "Successfully Created Account Signin!"
                })
            }
    }
    else{
        res.status(500).json({
            msg : "Invalid Inputs"
        })
    }
     
});

app.post('/signin' , async function(req, res){

    email = req.body.email;
    password = req.body.password;

    let findUser = await user.findOne({Email : email , Password : password});
    if(findUser){
        let token = jwt.sign( { email } , jwtPassword );
        res.status(200).json({
            token
        })
    }
    else{
        res.status(400).json({
            msg : "Seems like you are new to user_app please signup!"
        })
    }
    

});

app.get('/users' , async function(req , res){

    let token = req.headers.authorization;

    try{
        jwt.verify(token , jwtPassword);
        let all_users = await user.find();
        res.status(200).json({
            all_users
        }) 
    }
    catch(e){
        res.json({
            msg : "Invalid token"
        })
    }

});


app.delete('/remove' ,async function(req,res){

    email = req.body.email;
    password = req.body.password;

    let userStatus = await user.findOne({Email : email , Password : password});

    if(userStatus){
        await user.deleteOne({Email : email , Password : password})
        res.json({
            msg : "User deleted successfully..."
        })
    }
    else{
        res.json({
            msg : "User not found in database..."
        })
    }

})

app.use(function(err , req, res , next){
    res.json({
        msg : "Something got messed up !"
    })
    next();
});

app.listen(3000 , function(){
    console.log("Listening...");
})