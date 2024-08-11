const { Users , Admin , Todos } = require('../../db/db')
const { IsUserPresent , ValidateUSer , updateUser , filterTodosArray} = require('./helperFns')

///adduser
async function addUser(username,password){  
    const validation = await ValidateUSer(username,password);
    return validation;
}

//signinuser
async function signInUSer(username,password){
    const response = await IsUserPresent(username,password);
    return true ? (response) : false
}

//dummyauthuser
async function DummyAuthUser(req,res,next){
    const {username,password} = req.body;
    const response = await IsUserPresent(username,password);
    if(response){
        next()
    }
    else{
        res.json({
            Msg : "Auth Failed"
        })
    }
}

//addtodos
async function addTodo(username,password,title,description){
    let todo  = await Todos.create({
        Title : title,
        Description : description
    })
    const todo_id = todo._id;
    const newListOfTodos = await updateUser(username,password,todo_id);
    await Users.updateOne({
            Username : username,
            Password : password
        },{
            Todos : newListOfTodos
        }
    )
}

//update-todo
async function updateTodo(title,description,todoid){
    await Todos.updateOne({
        _id : todoid
    },
    {
        Title : title,
        Description : description
    }
    )
}


//delete-todo
async function deleteTodo(todoid,username,password){
    //first removing the todo from Todos Model
    //secondly removing the `id` from the user's array of todos
    //1
    let todo = await Todos.findOne({
        _id : todoid
    })
    if(todo == null){
        return -1; //Invalid TodoID
    }
    else{
        await Todos.deleteOne({
            _id : todoid
        })
    //2
        const todos = await filterTodosArray(todoid,username,password);
        await Users.updateOne({
            Username : username,
            Password : password
        },{
            Todos : todos
        })
    }
}

module.exports = {
    addUser,
    signInUSer,
    addTodo,
    updateTodo,
    deleteTodo,
    DummyAuthUser
}