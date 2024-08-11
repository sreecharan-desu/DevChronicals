const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://srecharandesu:charan%402006@cluster0.a9berin.mongodb.net/');
console.log("DB Handshake done")

// Define schemas
const AdminSchema = new mongoose.Schema({

    Username : String,
    Password : String

});

const UserSchema = new mongoose.Schema({

    Username : String,
    Password : String,
    Cousres  : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }

});

const CourseSchema = new mongoose.Schema({

    Title : String,
    Description : String,
    Price : Number,
    Image : String

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}