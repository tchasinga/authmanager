import bcryptjs from "bcryptjs";
import crypto from 'crypto'
import User from "../models/user.model.js";
import { generateTokendAndSetCookies } from "../utils/generateTokendAndSetCookies.js";

export const singup = async(req, res) =>{
    const {email, password, name} = req.body;
    
    try {  
        if(!email || !password || !name){
            return res.status(400).json({message: "Please fill all the fields"})
        }

        const userHasALreayExistings = await User.findOne({email})

        if(userHasALreayExistings){
            return res.status(400).json({
                message: "This user has already existe",
                sucess: false
            })
        }

        const hashingThepasswordofTheUser = await bcryptjs.hash(password,10)
        const verificationCodeToken  = Math.floor(100000 + Math.random() * 900000).toString();
        const user = new User({
            email,
            password: hashingThepasswordofTheUser,
            name,
            verificationCodeToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000  // it's 24
         })
          await user.save()

        // Jwt
        generateTokendAndSetCookies(res, user._id);
        res.status(201).json({
            sucess: true,
            message: "User was created sucessfully",
            user:{
                ...user._doc,
                password: undefined
            }
        })

    } catch (error) {
        res.status(400).json({
            sucess: false,
            message: error.message
        })      
    }
} 


 

export const sinigin = async(req, res) =>{
} 


export const singout = async(req, res) =>{
} 