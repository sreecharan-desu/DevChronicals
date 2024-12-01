import { Hono, Context, Next } from "hono";
import zod from 'zod';import bcrypt from 'bcrypt';
import { prisma } from "..";import dotenv from 'dotenv';
import jwt  from 'jsonwebtoken';dotenv.config();

const userZodSchema = zod.object({
    username : zod.string().min(5,{message : 'username should be atleast 5 chars'}).max(8,{message : 'username should be atmost 8 chars'}),
    password : zod.string().min(6,{message : 'password should be atleast 6 chars'}).max(10,{message : 'password should be atmost 10 chars'})
})

export const findUserByUsername = async(username:string)=>{
    const user = await prisma.user.findFirst({
        where : {
            Username : username
        }
    })

    return user;
}

export const findUserByCred = async(username:string,password:string)=>{
    const user = await prisma.user.findFirst({
        where : {
            Username : username,
            Password : password
        }
    })
    return user;
}

export const ValidateSignInputs = async(c : Context,next : Next)=>{
    const userValidation = userZodSchema.safeParse(await c.req.json());
    if(userValidation.success){
        next();
    }else{
        return c.json({
            msg  : userValidation.error.message,
            success : false
        })
    }
}

export const FetchDB =async(c:Context,next : Next)=>{
    const userValidation = userZodSchema.safeParse(await c.req.json());
    const {username} = await c.req.json();
    if(userValidation.success){
        const user = await findUserByUsername(username);
        if(user)
            return c.json({msg : 'username already taken please try a newone!'})
        else    
            next();
    }else{
        return c.json({
            msg  : userValidation.error.message,
            success : false
        })
    }
}

export const ValidateUser = async(c:Context,next : Next)=>{
    const userValidation = userZodSchema.safeParse(await c.req.json());
    const {username,password} = await c.req.json();
    if(userValidation.success){
        const userExists = await findUserByUsername(username);
        if(userExists){
            const hashed_password = userExists.Password;
            const validation = await bcrypt.compare(password,hashed_password);
            if(validation){
                next()
            }else{
                return c.json({msg  : 'Check your credentials again!'})
            }
        }else{
            return c.json({msg  :`Can't find user with username ${username}`})
        }  
    }else{
        return c.json({
            msg  : userValidation.error.message,
            success : false
        })
    }
}

export const authMiddleware = async(c:Context,next : Next)=>{
    const authorization = c.req.header('Authorization');
    if(authorization && process.env.JWT_SECRETKEY){
        const token = authorization.split(' ')[1];
        const verification = jwt.verify(token,process.env.JWT_SECRETKEY);
        if(verification){
            next()
        }else{
            return c.json({
                msg  : 'Auth failed',
                success : false
            })
        }
    }
}