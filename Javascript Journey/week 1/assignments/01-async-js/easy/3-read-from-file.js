/*
## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 
*/


const fs = require("fs");
let sum = 0
function readFromFile(){
    return new Promise(function(resolve , reject){
        fs.readFile("a.txt" , "utf-8" , function(err , data){
            if( data ){
                resolve(data);
            }
            else if(err){
                reject(err);
            }
        });
        for( let i = 1 ; i <= 100000000 ; i++){
            // sum += i
        }
        // console.log(sum);
    });
};


readFromFile().then(
    function(data){
        console.log(data)
    }
)
.catch(
    function(data){
        console.log(data)
    }
)
