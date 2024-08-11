const zod = require('zod');

function InputValidation(req,res,next){
    const{username,password} = req.body;
    const usernameSchema = zod.string();
    const passwordSchema = zod.string().min(8).max(10);

    let usernameResponse = usernameSchema.safeParse(username).success 
    let passwordResponse = passwordSchema.safeParse(password).success 

    if(usernameResponse && passwordResponse){
        next()
    }
    else{
        res.json({
            Msg : "Input Validation failed"
        })
    }
}

module.exports = {
    InputValidation
}