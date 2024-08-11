//npm install express for installing express module

//Tip ; Install Postman App Which would eventually make your life easier...

//Install ipconfig

//bodyParser 

const express = require("express");
const port = 5000;

const app = express();
app.use(express.json());

app.get('/' , function(request , response){

    console.log(request.headers["host"]);
    console.log(request.headers);

    const message = request.body.message;

    console.log(message);


    response.status(302).send("SreeCharan");
})


app.listen(port , function(){
    console.log(`Listening to the port no : ${port}...`)
})

