const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/sum',(req, res)=>{

    a = parseInt(req.query.a);
    b = parseInt(req.query.b);
    
    res.json({
        msg : (a+b)
    })

});


app.listen(5000,()=>{
    console.log("Listening...");
})