const express =require('express');
const cors = require('cors');

const mainRouter = require('./routes/index');
const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send(
        
        'Hell from backend'
    )
})


app.use("/api/v1",mainRouter);

app.listen(3000,(req,res)=>{
    console.log("Listening...")
})