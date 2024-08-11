/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();


app.get("/files" , function(request , response){
  fs.readdir( path.join(__dirname , './files/') , function(err , data){
      if(err){ response.status(500).json({ error : 'Failed to retrive files'})}
      else{response.status(200).json({data})}
  });
});

app.get("/files/:fileName",function(request , response){
  const filename = request.params.fileName;
  const filePath = path.join( __dirname , './files/' , filename);
  fs.readFile(filePath , "utf-8" , function(err, data){
    if(err){response.status(404).send("File Not Found");}
    else{response.status(200).send({filename,data})}
  });
});

app.all('*' , function( request ,response){
  response.status(404).send("Route not found")
})

app.listen(3000,function(){
  console.log("Listening...");
})

module.exports = app;