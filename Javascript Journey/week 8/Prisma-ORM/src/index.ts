import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(firstName : string,LastName : string,email : string,password : string) {
    const response =  await prisma.user.create({
        data : {
            firstName,
            LastName,
            password,
            email
        },
        select : {
            id : true,
            password : true
        }
    })
    console.log(response)

}


// insertUser('SreeCharan',"Desu","sreecharagn3042g9@gmail.com","1234567890");



interface UserUpdateParams{
    firstName: string;
    LastName: string;
}

async function updateUser(username : string,updateParams:UserUpdateParams){
        const res = await prisma.user.update({
            where : {email : username},
            data  : updateParams
        }
    );
}


updateUser('sreecharan309@gmail.com',{
    firstName : 'firstName',
    LastName : 'LastName'
});