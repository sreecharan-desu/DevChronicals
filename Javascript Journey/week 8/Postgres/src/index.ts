//write a function to create a users table in the databse.
import { Client, Query } from "pg";
const client = new Client({
    connectionString : "postgresql://postgres:2006@localhost/postgres"
});

const connectToClient =async()=>{
    try{
        await client.connect();
        console.log("Connected to the client successfulyy..")   
    
    }catch(e){
        console.log("error connecting db")
    }
}

const createUsersTable:()=>void =async() =>{
        try{
            const query = `CREATE TABLE users(
                id SERIAL PRIMARY KEY,
                name VARCHAR(50),
                email VARCHAR(50) UNIQUE NOT NULL,
                password VARCHAR(50)
            );`
            const values = ['4','username']; 
            const response = await client.query(query);
            console.log("Success.");
        }catch(e){
            console.log("Error during process")
        }
    }

const createTodosTable = async()=>{
    try{
        console.log("Connected to the client successfulyy..")
        const query = `CREATE TABLE todos(
            id SERIAL PRIMARY KEY,
            title VARCHAR(50),
            description VARCHAR(50),
            user_id INT,
            FOREIGN kEY(user_id) REFERENCES users(id),
            is_done BOOLEAN DEFAULT false);`
        const response = client.query(query);    

    }catch(e){
        console.log("error connecting db")
    }
}


const insertIntoUsersTable = async()=>{
    try{
        const query = `INSERT INTO users(id,name,email,password) VALUES($1,$2,$3,$4);`
        const values = ["2","SreeCharan","sreecharan3092@gmail.com",'53w837ryugfusgesyi73twye83u'];
        const response = await client.query(query,values);
        console.log("Successfully created user"); 
    }catch(e){
        console.log('Error inserting user');
    }   
}


const insertIntoTodosTable = async()=>{
    try{
        const query = `INSERT INTO todos(id,title,description,user_id)VALUES($1,$2,$3,$4);`
        const values = ["3","Title-3","Description-3",1];
        const response = await client.query(query,values);
        console.log("Successfully added todo"); 
    }catch(e){
        console.log('Error inserting todo');
    }   
}


const getUsers = async()=>{
    try{
        const userid =1;
        const query = `SELECT * FROM users WHERE id = ${userid}`;
        const resposne = await client.query(query);
        console.log(resposne.rows);   
        if(resposne.rows.length == 0) 
            console.log("No Users Found");
    }catch(e){
        console.log("Error finding users")
    }
}

const getTodos = async()=>{
    try{
        const userid = 1;
        const query = `SELECT * FROM todos WHERE user_id = ${userid}`;
        const resposne = await client.query(query);
        console.log(resposne.rows);   
        if(resposne.rows.length == 0) 
            console.log("No Todos Found");
    }catch(e){
        console.log("Error finding users")
    }
}

const udpateTodo = async()=>{
    try{
        const todoid = 1; 
        const query = `UPDATE todos SET is_done = true WHERE id = ${todoid}`; 
        const response = await client.query(query); 
    }catch(e){
        console.log("Error updating todo");
    }

}

const deleteTodo = async()=>{
    try{
        const todoid = 2; 
        const query = `DELETE FROM todos WHERE id = ${todoid}`; 
        const response = await client.query(query); 
    }catch(e){
        console.log("Error updating todo");
    }

}


const getUser = async(userid : number)=>{
    try{
        const query = `
            SELECT users.*,todos.title,todos.description,todos.is_done 
            FROM users
            LEFT JOIN todos ON users.id = todos.user_id 
            WHERE users.id = ${userid};
        `; 
        const response = await client.query(query); 
        console.log(response.rows);
    }catch(e){
        console.log("Error fetching data");
    }
}

connectToClient();
// createUsersTable();
// createTodosTable();
// insertIntoUsersTable();
insertIntoTodosTable();
// getUsers();
// getTodos();
// udpateTodo();
// getTodos();
// deleteTodo();
// getTodos();
getUser(1);


