/*
## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/


// console.log("File Cleaner");

function readFromFile(){
    const fs = require("fs");
    return new Promise(function(resolve , reject){
        fs.readFile( "file.txt" , "utf-8" , function(err , data){
            resolve(data);
        });
    });
}

function writeToFile(data){
    const fs = require("fs");
    // console.log(data)
    return new Promise(function(resolve , reject){
        fs.writeFile("file.txt" , data , function(err , info){    
            resolve("Done.");
        });
    });
}


readFromFile().then(
    function( data ){
        cleanedData = ''
        for (let i = 0 ; i < data.length ; i++){

            char = data[i];
            next_char = data[i+1]

            if(char == " "){

                if( next_char == " "){   
                    continue            
                }

                else{
                    cleanedData+= char;
                }

            } 
            else{
                cleanedData+= char;
            }

        }
        writeToFile(cleanedData).then(
            function(data){
                console.log(data);
            }
        )
    }
)