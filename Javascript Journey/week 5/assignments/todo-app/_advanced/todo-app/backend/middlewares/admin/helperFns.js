const { Users , Admin , Todos } = require('../../db/db')

async function IsAdminPresent(username , password){
    const admin = await Admin.findOne({
        Username : username,
        Password : password
    })
    return true ? (admin) : false; 
}

async function ValidateAdmin(username , password){
    const admin = await Admin.findOne({
        Username : username,
    })
    
    if(admin){
        if(admin.Username == username ){
            if (admin.Password == password ) { return 0;  } //user already present
            else { return -1; } //username taken
        }
    }
    else{
        await Admin.create({
            Username : username,
            Password : password
        })
        return 1;
    }
    //new admin added
}

module.exports = {
    IsAdminPresent,
    ValidateAdmin
}