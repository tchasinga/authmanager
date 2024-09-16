import bcrypt from "bcryptjs";
import crypto from 'crypto'
import User from "../models/user.model.js";

export const singup = async(req, res) =>{
    const {email, password, name} = req.body;
    
    try {  
        if(!email || !password || !name){
            
        }
    } catch (error) {
        
    }
} 


export const sinigin = async(req, res) =>{
} 


export const singout = async(req, res) =>{
} 