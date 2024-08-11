//pending , resolved( return data that is passed) , rejeceted

let p = new Promise(function(callback){
    setTimeout(
        function (){
            callback("Sree")
        },1000
    )
});



function callback(){
    console.log(p)
}

console.log(p)
p.then(callback)



//Syntax

// const fs = require("fs");


// function Promises(){
//     return new Promise(
//         function (callback){
//             fs.readFile("a.txt" , "utf-8" , function(err , data){
//                 callback(data)
//             })
//         }
//     )
// }


// function logData(data){
//     console.log(data)
// }

// Promises().then(logData)