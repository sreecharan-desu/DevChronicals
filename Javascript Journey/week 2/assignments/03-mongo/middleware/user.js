const zod = require('zod');
const { User } = require('../db');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    let username = req.headers.username;
    let password = req.headers.password;

    //validation
        //schemas 
            let usernameSchema = zod.string();
            let passwordSchema = zod.string();

    if( (usernameSchema.safeParse(username).success ) && (passwordSchema.safeParse(password).success) ){

        let reponse = await User.findOne({
            Username : username,
            Password : password
        })

        if(response){
            next();
        }        
        else{
            res.json({
                msg : "User not found"
            })
        }

    }
    else{
        res.json({
            msg : "Invalid Inputs"
        })
    }

}

module.exports = userMiddleware;