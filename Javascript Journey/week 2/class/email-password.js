const express = require('express')
const zod = require('zod');
const app = express();
app.use(express.json());
    
let schema = zod.object({
    Email : zod.string().email(),
    Password : zod.string().min(8).and( zod.string().max(10) ) 
})


function validate(req,res,next){
    let obj = req.body.obj;
    let response = schema.safeParse(obj)

    if(response.success){
        next()
    }
    else{
        res.json({
            msg : "Sorry Input Validation Failed"
        })
    }

}


app.post('/' ,validate ,function(req,res){
    res.json({
        msg :"Holla Input Validation Success!" 
    })

})


//global-catch
app.use('/' , function(err , req, res , next){
    console.log("Something got messed up!..");
    return;
})

app.listen(5000, function(){
    console.log("Listening...");
})