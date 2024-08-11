/*
## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/



const fs = require("fs");
function writeToAFile(){

    return new Promise( function(resolve , reject ){
        fs.writeFile("a.txt" , "HI" , function(err , data){
            if( err ){
                reject("Not Done.");
            }
            else{
                resolve("Done.");
            }
        })
    });

}


writeToAFile().then(
    function(data){
        console.log(data)
    }
)
.catch(
    function(err){
        console.log(err)
    }
)