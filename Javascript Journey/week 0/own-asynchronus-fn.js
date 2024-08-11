const fs = require("fs");

fs.readFile("a.txt","utf-8",function(err, data){

    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }

});

console.log("The readFile will execute after me");

let sum = 0

for( i = 1; i <= 1000000000; i++){
    sum++
}

console.log("Busy Waiting Completed at sum = " + sum)
console.log("The readFile will execute immediately after me")
