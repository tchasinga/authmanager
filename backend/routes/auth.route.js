import express from "express";
import { singout, signup, sinigin , verifyEmail} from "../controller/auth.controller.js";


// initialize express 
const router = express.Router()

router.post('/singup', signup) 
router.post('/login', sinigin)
router.post('/logout', singout)

router.post('/verifyemail', verifyEmail)
router.post('/forgetpassword', forgetpassword)

// exporting side of router
export default router