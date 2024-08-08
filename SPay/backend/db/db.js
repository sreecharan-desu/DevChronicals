const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://srecharandesu:charan%402006@cluster0.a9berin.mongodb.net/paytm-clone');


const UserSchema = new mongoose.Schema({
    Username : String,
    FirstName : String,
    LastName  : String,
    Password  : String 
})


const AccountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.ObjectId,
        ref  : 'User',
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})

const User = mongoose.model('User',UserSchema);
const Account = mongoose.model('Account',AccountSchema);

module.exports = {
    User,
    Account
}