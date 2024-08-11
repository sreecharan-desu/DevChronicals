const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());


const _PORT_ = 5000;

const todos =  [
    {
      Title : 'Todo Title 1',
      Description : "Todo Descripttion 1"
    },
    {
      Title : 'Todo Title 2',
      Description : "Todo Descripttion 2"
    },
    {
      Title : 'Todo Title 3',
      Description : "Todo Descripttion 3"
    }
  ]

app.post('/addtodo',(req,res)=>{
    const {username,password,title , description } = req.body;
    Todos = [...Todos,{Title : title,Description : description}]
    res.json({
        username,
        password,
        title,
        description
    })
})


app.get('/userstate',(req,res)=>{

    const usr = [{
        Username : "Sree",
        Password : "1234",
        Todos : todos
    }]


    res.json({
        User : usr
    })

})



app.listen(_PORT_,()=>{
    console.log("Listening...")
})