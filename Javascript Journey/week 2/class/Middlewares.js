//Todo
    //Count No.of Requests
    //Find Howmuch time is taken by your server to manage requests

const express = require('express');
let requestCount = 0;
function Middleware(req, res, next){
    requestCount++;
    let sum = 0
    req.startTime = Date.now(); // Store start time in the request object
    for(let i = 0 ; i <= 10000000000; i++){
        sum+=i;
    }
    next();
}
app = express();
app.use(express.json());
app.get('/' ,Middleware,function(req, res){
    const endTime = Date.now();
    const startTime = req.startTime;
    res.send(`${requestCount.toString()} request(s).. request completed in ${(endTime - startTime) / 1000} s.`);
});

//global-catches  | error-handling middlewares  | global-catches also can have multiple callbacks
app.use(function(err ,req ,res, next){
    res.json({
        msg : "You have messed up!"
    })
})


app.listen(3000, function(){
    console.log("Listening...")
})