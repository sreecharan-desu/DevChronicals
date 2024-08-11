//validateArrayOfStrings

const express = require('express');  //imports
const zod = require('zod')
const app = express();


app.use(express.json());

const schemaForArrayOfStrings = zod.array(zod.string()); //zod-schemas

app.post('/', function(req, res){  //routes
    const array = req.body.array;
    let validation = schemaForArrayOfStrings.safeParse(array); //validation

    (res.send(`Validated : ${validation.success} \nData : ${validation.data}`) ) 
    ? ( validation.success ) :
    (res.send(`Validated : ${validation.success} \nData : ${validation.data}`) )
})


app.listen(5000,function(){
    console.log(`Listening on port ${5000}...`);
})