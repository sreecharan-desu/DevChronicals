const jwt = require('jsonwebtoken');  //pending (package.json) update dependency 
const _MY_SECRET_KEY = '@#$%^&*(*&%^$'

async function returnJwt(usrname){
    const key = jwt.sign(usrname,_MY_SECRET_KEY)
    return key
}

async function decodeJwt(key){
    const payload = jwt.decode(key)
    return payload
}

module.exports = {
    returnJwt,
    decodeJwt,
    _MY_SECRET_KEY
}