import { db } from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register=(req,res)=>{

    // Check if user exists
    const q= "Select * from users where username = ?"
    db.query(q,[req.body.username],(err,data)=>{
        if(err){
            return res.status(500).json(err)
        }
        if(data.length){
            return res.status(409).json("User Already exists")
        }
         // Create aa new user
        // Hash the password 

        const salt= bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const q= "Insert into users (`username`,`password`,`email`,`name`) VALUE(?)";

        const values=[req.body.username, hashedPassword, req.body.email,req.body.name];

        db.query(q,[values],(err,data)=>{
            if(err){
                return res.status(500).json(err)
            }
            return res.status(201).json("User created successfully");
        })


    })
   




}

export const login=(req,res)=>{
    const q = "Select * from users where username =?";
    db.query(q,[req.body.username],(err,data)=>{
        if(err){
            return res.status(500).json(err)
        }
        if(data.length==0){
            return res.status(401).json('Invalid UserName')
        }
        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)
        if(!checkPassword){
            return res.status(400).json("Wrong password or username")
        }
        const token = jwt.sign({id:data[0].id}, "secretkey")
        const {password, ...other}= data[0]

        res.cookie("accesstoken",token,{
            httpOnly: true
        }).status(200).json(other)
    })

}



export const logout=(req,res)=>{
    res.clearCookie("accesstoken",{
        secure:"true",
        sameSite:"none"
    }).status(200).json("Logged  Out Successfully");

}