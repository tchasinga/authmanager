import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require: true,
        unique: true
    },
    password: {
        type:String, 
        require: true,
    },
    name: {
        type:String, 
        require: true,
    },
    lastLogin:{
        type: Date,
        default: Date.now
    },
},{timestamps: true})