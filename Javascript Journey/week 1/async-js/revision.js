//callbacks

// function CallbackFN(fn){

//     data = "Callback\nI am Data"
//     fn(data);

// }

// function logData(data){
//     console.log(data)
// }


// CallbackFN(logData)


// console.log("I will execute after callback\n")


//Promise Syntax

// const fs = require("fs");

// function PromiseFN(){
//     return new Promise(function(resolve){
//         fs.readFile( "promise.txt" , "utf-8" , function(err , data){
//             if(err){
//                 console.log(err)
//             }
//             else{
//                 resolve(data);
//             }
//         });
//     });
// }

// PromiseFN().then( function(data){
//     console.log(data)
// });


//Async - Await Syntax
// const fs = require("fs");


// function returnPromise(){
//     return new Promise(function(resolve){
//         fs.readFile("async-await.txt" , "utf-8" , function(err , data){
//             resolve(data)
//         });
//     });
// }

// async function Sree(){
//     console.log(await returnPromise());
// }

// Sree();
