//importing the mongooose module
const mongoose = require('mongoose');

//connecting the mongo database to the application
mongoose.connect('mongodb+srv://srecharandesu:charan%402006@cluster0.a9berin.mongodb.net/reusable-card');


//defining the schemas
const userSchema = new mongoose.Schema({
    Username : String,
    Password : String,
    Cards : Array
})

const adminSchema = new mongoose.Schema({
    Username : String,
    Password : String
});

const cardsSchema = new mongoose.Schema({
    Title : String,
    Description : String,
    Intrests : Array,
    Linkedin : String,
    Twitter : String
})

//intializing models
const User = mongoose.model('User',userSchema)
const Cards = mongoose.model('Cards',cardsSchema)
const Admin = mongoose.model('Admin',adminSchema)

//exporting the models
module.exports = {
    User,
    Cards,
    Admin
} 