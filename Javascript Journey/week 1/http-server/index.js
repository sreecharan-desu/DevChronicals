const express = require("express");
const app = new express();

function calculateSum(n){
    sum = 0
    for ( let i = 1 ; i <= n ; i++){
        sum += i
    }
    return sum;
}

app.get("/",function(request , response){
    const n = request.query.n
    sum = calculateSum(n);
    response.send("Hello world!");
})

app.listen(5000,function(){
    console.log("Listening...")
})