import express from "express";
import { singout, singup, sinigin } from "../controller/auth.controller.js";


// initialize express 
const router = express.Router()

router.post('/singup', singup)
router.post('/login', sinigin)
router.get('/logout', singout)

// exporting side of router
export default router