const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://srecharandesu:charan%402006@cluster0.a9berin.mongodb.net/TodoApp');

const AdminSchema = new mongoose.Schema({
    Username : String,
    Password : String
})

const TodoSchema = new mongoose.Schema({
    Title : String,
    Description : String
})

const UserSchema = new mongoose.Schema({
    Username : String,
    Password : String,
    Todos : Array
})

const Users = mongoose.model('Users' , UserSchema);
const Admin = mongoose.model('Admin' , AdminSchema);
const Todos = mongoose.model('Todos' , TodoSchema);

module.exports = {
    Users,
    Admin,
    Todos
}