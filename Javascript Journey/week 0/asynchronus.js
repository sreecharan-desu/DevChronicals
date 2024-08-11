//Asynchronus FN's

function AsynchronusFN(){
    const fs = require("fs");

    function Asynchronus(callback){
        fs.readFile("a.txt" , "utf-8" , function(err, data){
            callback(data)
        });
    }
    
    
    
    function logData(data){
        console.log(data)
    }
    
    Asynchronus(logData)
}

//Promises ( Just a Syntactic Sugar for the Asynchronus Functions )

function Promises_Example(){
    const fs = require("fs")

    function Promises(){
        return new Promise(function(callback){
            fs.readFile("a.txt" , "utf-8" , function(err , data){
                callback(data);
            });
        });
    }


    function logData(data){
        console.log(data)
    }

    Promises().then(logData)
}



AsynchronusFN()
Promises_Example()