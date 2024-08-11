const { Users , Admin , Todos } = require('../../db/db')
const { IsAdminPresent , ValidateAdmin } = require('./helperFns.js')

///addAdmin
async function addAdmin(username,password){  
    const validation = await ValidateAdmin(username,password);
    return validation;
}

//signinAdmin
async function signInAdmin(username,password){
    const response = await IsAdminPresent(username,password);
    return true ? (response) : false
}

//dummyauthadmin
async function DummyAuthAdmin(req,res,next){
    const {username,password} = req.body;
    const response = await IsAdminPresent(username,password);
    if(response){
        next()
    }
    else{
        res.json({
            Msg : "Auth Failed"
        })
    }
}


//removeUser
async function removeUser(username){
    const user = await Users.findOne({
        Username : username
    })
    if(user){
        //delete all the todos associated with the user
        (user.Todos).map(async(todoid)=>{
            await Todos.deleteOne({
                _id : todoid
            })       
        })
        //delete entire user
        await Users.deleteOne({
            Username : username
        })
        return true;//returns true `Done`
    }
    else{
        return null;//return null `UnDone`
    }
}

module.exports = {
    addAdmin,
    signInAdmin,
    removeUser,
    DummyAuthAdmin
}