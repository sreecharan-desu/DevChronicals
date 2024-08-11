/*

(Hospital.com)
    fn's

    GET - know howmany kidneys they have and condition of their kidneys
    POST - add a kidney
    PUT - replace a kidney
    DELETE - remove a kideny

*/

//dummy database

let users = [
    {
        user_name : 'user_1',
        metadata  : {
            profilepic : 'pic_user1',
            address    : 'address_user1'
        },
        kidneys: [
            {
                health : 'good'
            }
        ]
    }
];

const express = require("express");
const app = express();


app.use(express.json());  //added when encountered an error named  ----> ` error reading req.body `

app.get("/" , function(request , response){
    const kidneys = users[0].kidneys    
    healthy_kidneys = 0;
    damaged_kidneys = 0;
    for ( let i = 0 ; i < kidneys.length; i++){
        if( kidneys[i].health == 'good'){
            healthy_kidneys++;
        }
        else if( kidneys[i].health == 'bad' ){
            damaged_kidneys++;
        }
    }
    no_of_kidneys = kidneys.length;
    response.json(
        {
            no_of_kidneys,
            healthy_kidneys,
            damaged_kidneys
        }
    )
});


app.post("/",function(request , response){
    const isHealthy = request.body.isHealthy;
    users[0].kidneys.push({
        health : isHealthy
    })

    response.json({
        //
    })
});


app.put("/",function(request , response){

    // let allKidneysAreGood = false;
    let atleastOneKidneyIsBad = false;

    for( let i = 0 ; i <users[0].kidneys.length ; i++){
        if(users[0].kidneys[i].health == 'bad'){
            atleastOneKidneyIsBad = true;    
        }
    }    

    if(!atleastOneKidneyIsBad){
        response.status(411).json({
            msg : "All kidneys are good"
        })
    }
    else{
        for( let i = 0 ; i <users[0].kidneys.length ; i++){
            users[0].kidneys[i].health = 'good';
        }
        response.json({
            //
        });
    }
});



app.delete("/",function(request , response){

    //checking if there are any bad Kidneys
    let atleastOneKidneyIsBad = false;
    for(let i = 0; i < users[0].kidneys.length ; i++){
        if(users[0].kidneys[i].health == 'bad') {
            atleastOneKidneyIsBad = true
        }
    }

    //letting the user to delete a kidney only if he has atleast one bad kidney
    if(atleastOneKidneyIsBad){
        goodKidneys = []
        for(let i = 0; i < users[0].kidneys.length ; i++){
            if(users[0].kidneys[i].health == 'good'){
                goodKidneys.push({
                    health : 'good'
                })
            }
        }
        //splice(index,number)  ---> to remove n element from an array
        users[0].kidneys = goodKidneys;
        response.json({
            msg : "Done"
        })
    }
    else{
        response.status(411).json({
            msg : "Bad Request :("
        })
    }


});


app.listen(3000,function(){
    console.log("Listening...")
})