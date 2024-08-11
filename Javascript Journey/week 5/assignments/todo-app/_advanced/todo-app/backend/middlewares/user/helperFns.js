const { Users , Admin , Todos } = require('../../db/db')

async function IsUserPresent(username , password){
    const user = await Users.findOne({
        Username : username,
        Password : password
    })
    if(user){
        return true;
    }
    else{
        return false;
    }
}

async function ValidateUSer(username , password){
    const user = await Users.findOne({
        Username : username,
    })
    if(user){
        if(user.Username == username ){
            if ( user.Password == password ){
                 return 0;  
            } //user already present
            else { 
                return -1; 
            } //username taken
        }
    }
    else{
        await Users.create({
            Username : username,
            Password : password
        })
        return 1;
    }
    //new user added
}


async function getUser(username,password){
    const user  = await Users.findOne({
        Username : username,
        Password : password
    })
    return user;
}


async function updateUser(username,password,todoid){
    const user = await getUser(username,password);
    let listOfTodos = user.Todos;    
    let newListOfTodos = [...listOfTodos,todoid];
    return newListOfTodos;
}


async function filterTodosArray(todoid,username,password){
    let user = await Users.findOne({
        Username : username,
        Password : password
    })

    let index;
    //finding the index of the todoId
    for(let i = 0 ; i < (user.Todos).length;i++){
        if(user.Todos[i] == todoid){
            index = i;
        }
    }

    //removing the todo using `splice`
    user.Todos.splice(index,1);

    let listOfNewTodos = user.Todos;
    return listOfNewTodos;
}

module.exports = {
    IsUserPresent,
    ValidateUSer,
    getUser,
    updateUser,
    filterTodosArray
}