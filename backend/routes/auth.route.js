import express from "express";
import { singout, signup, sinigin } from "../controller/auth.controller.js";


// initialize express 
const router = express.Router()

router.post('/singup', signup)
router.post('/login', sinigin)
router.post('/logout', singout)

// exporting side of router
export default router