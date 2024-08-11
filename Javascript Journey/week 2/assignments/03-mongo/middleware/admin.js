const zod = require('zod');
const { Admin } = require('../db');
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    let username = req.headers.username;
    let password = req.headers.password;

    //validation
        //schemas 
            let usernameSchema = zod.string();
            let passwordSchema = zod.string();
    if( (usernameSchema.safeParse(username).success ) && (passwordSchema.safeParse(password).success) ){

        let reponse = await Admin.findOne({
            Username : username,
            Password : password
        })

        if(response){
            next();
        }        
        else{
            res.json({
                msg : "Admin not found"
            })
        }

    }
    else{
        res.json({
            msg : "Invalid Inputs"
        })
    }
}

module.exports = adminMiddleware;