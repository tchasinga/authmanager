import bcrypt from "bcryptjs";
import crypto from 'crypto'
import User from "../models/user.model.js";

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

    } catch (error) {
        
    }
} 


export const sinigin = async(req, res) =>{
} 


export const singout = async(req, res) =>{
} 