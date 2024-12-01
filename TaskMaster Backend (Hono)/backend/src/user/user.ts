import { Hono } from 'hono';import jwt from 'jsonwebtoken';
import { prisma } from '..';import bcrypt from 'bcrypt';import dotenv from 'dotenv';
import { FetchDB, ValidateUser, ValidateSignInputs, authMiddleware } from './middlewares';
export const userRouter = new Hono();dotenv.config();


userRouter.post('/signup',ValidateSignInputs,FetchDB,async(c) => {
  const {username,password} = await c.req.json(); 
  const hashed_password = await bcrypt.hash(password,4);
  const user = await prisma.user.create({
    data : {
      Username : username,
      Password : hashed_password
    },
    select : {
      id : true
    }
  })

  return c.json({msg : `Successfully created account with userid : ${user.id}`});
});
userRouter.post('/signin',ValidateSignInputs,ValidateUser,async(c)=>{
  const {username} = await c.req.json();const SECRET_KEY = process.env.JWT_SECRETKEY;
  if(SECRET_KEY){
    try{
      const jwt_token = jwt.sign(username,SECRET_KEY);
      return c.json({
        token : jwt_token
      })
    }catch(e){
      return c.json({
        msg : "Internal Server Error!"
      })
    }

  }else{
    console.log('Error gathering ENV (Internal Server Error!!)')
    return c.json({
      msg : "Internal Server Error!"
    })
  }
})
userRouter.post('/addtodo',authMiddleware,async(c)=>{
  const {title,description,userId} = await c.req.json();

  try{
    const todo = await prisma.todos.create({
      data : {
        Title : title,
        Description : description,
        userid : userId
      },
      select : {
        id : true
      }
    })
    return c.json({msg : `Successfully added todo with id : ${todo.id}`})
  }catch(e){
    return c.json({
      msg : "Internal Server Error!"
    })
  }


})
userRouter.put('/updatetodo',authMiddleware,async(c)=>{
  const {todoid,title,description} = await c.req.json();
  try{
    await prisma.todos.update({
      where : {
        id : todoid
      },
      data : {
        Title : title,
        Description : description
      }
    })
    return c.json({msg : `Successfully updated todo with id : ${todoid}`})
  }catch(e){
    return c.json({
      msg : "Internal Server Error!"
    })
  }

})
userRouter.put('/markasdone',authMiddleware,async(c)=>{
  const {todoid} = await c.req.json();
  try{
    await prisma.todos.update({
      where : {
        id : todoid
      },
      data : {
        isCompleted : true
      }
    })
    return c.json({msg : `Todo with id : ${todoid} has been marked as done!`})
  }catch(e){
    return c.json({
      msg : "Internal Server Error!"
    })
  }
})
userRouter.delete('/deletetodo',authMiddleware,async(c)=>{
  const {todoid} = await c.req.json();
  try{
    await prisma.todos.delete({
      where : {
        id : todoid
      }
    })
    return c.json({mg : `Todo with id : ${todoid} has been deleted successfully..`})
  }catch(e){
    return c.json({msg : "Error while deleting todo please try again!"})
  }

})
userRouter.get('/getdetails',authMiddleware,async(c)=>{
  const {username} = await c.req.json();
  try{
    const user = await prisma.user.findFirst({
      where : {
        id : username
      },select : {
        id : true,
        Username : true,
        Password : true,
        Todos : {
          select : {
            id : true,
            Title : true,
            Description : true,
            isCompleted : true,
            user : {
              select : {
                Username : true
              }
            }
          }
        }
      }
    })

    if(user)
      return c.json({user})
    else 
      return c.json({msg : `Cannot find user with Username : ${username}`})
  }catch(e){
    return c.json({msg : "Error finding user"})
  }
  
})

//admin specific
userRouter.get('/getusers',authMiddleware,async(c)=>{
  try{
    const user = await prisma.user.findMany({
      select : {
        id : true,
        Username : true,
        Password : true,
        Todos : {
          select : {
            id : true,
            Title : true,
            Description : true,
            isCompleted : true,
            user : {
              select : {
                Username : true
              }
            }
          }
        }
      }
    })

    return c.json({user})
  }catch(e){
    return c.json({msg : "Error finding user"})
  }
  
})