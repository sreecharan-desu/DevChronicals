const zod = require('zod');

const schemaForObj = zod.object({
    email : zod.string().email(),
    password : zod.string().min(8).and(zod.string().max(10))
})


function validateInputs(obj){
    let result = schemaForObj.safeParse(obj);
    return result.success;
}


email = "Sreecharan@309gmail.com",
password = "1234567890"

obj = {
    email,
    password
}

console.log(validateInputs(obj));