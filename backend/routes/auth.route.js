import express from "express";
import { singout, signup, sinigin , verifyEmail, forgetpassword, resetpassword, checkAuth} from "../controller/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";


// initialize express 
const router = express.Router()

router.get("/check-auth", verifyToken, checkAuth);
router.post('/singup', signup) 
router.post('/login', sinigin)
router.post('/logout', singout)

router.post('/verifyemail', verifyEmail)
router.post('/forgetpassword', forgetpassword)
router.post('/resetpassword/:token', resetpassword)

// exporting side of router
export default router