//imports
const zod = require('zod');

//defining the schemaDefinitions for usename and password
const usernameSchema = zod.string();
const passwordSchema = zod.string().min(8);

function ValidateInputs(req,res,next){
    //getting the username and password from body (actually not a good idea );
    const {username, password} = req.body;

    //doing validation using zod
    let usernameResponse = usernameSchema.safeParse(username).success;
    let passwordResponse = passwordSchema.safeParse(password).success;

    if(usernameResponse && passwordResponse)
        next() //pass the control to the next callback
    else
        res.json({
        msg : "Input valdiation failed!" //terminate the process
    })
}



module.exports = {
    ValidateInputs
}