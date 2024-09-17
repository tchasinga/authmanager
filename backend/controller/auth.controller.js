import bcryptjs from "bcryptjs";
import crypto from 'crypto'

import User from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail, sendWelcomEmails } from "../mailtrap/email.js";

// this is my signup function
export const signup = async (req, res) => {
	const { email, password, name } = req.body;

	try {
		if (!email || !password || !name) {
			throw new Error("All fields are required");
		}

		const userAlreadyExists = await User.findOne({ email });
		console.log("userAlreadyExists", userAlreadyExists);

		if (userAlreadyExists) {
			return res.status(400).json({ success: false, message: "User already exists" });
		}

		const hashedPassword = await bcryptjs.hash(password, 10);
		const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

		const user = new User({
			email,
			password: hashedPassword,
			name,
			verificationToken,
			verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
		});
		await user.save();

		// jwt
		generateTokenAndSetCookie(res, user._id);
       await sendVerificationEmail(user.email, verificationToken);

		res.status(201).json({
			success: true,
			message: "User created successfully",
			user: { 
				...user._doc,
				password: undefined,
			},
		});
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};
 
// this is my verifyEmail function
export const verifyEmail = async (req, res) =>{
	const { code } = req.body;
	try {
		const user = await User.findOne({
			verificationToken: code,
			verificationTokenExpiresAt: { $gt: Date.now() },
		});

		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid or expired verification code" });
		}

		user.isVerified = true;
		user.verificationToken = undefined;
		user.verificationTokenExpiresAt = undefined;
		await user.save();

		await sendWelcomEmails(user.email, user.name);

		res.status(200).json({
			success: true,
			message: "Email verified successfully",
			user: {
				...user._doc,
				password: undefined,
			},
		});
	} catch (error) {
		console.log("error in verifyEmail ", error);
		res.status(500).json({ success: false, message: "Server error" });
	}
}

// this is my sinigin function
export const sinigin = async(req, res) =>{
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}
		const isPasswordValid = await bcryptjs.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}

		generateTokenAndSetCookie(res, user._id);

		user.lastLogin = new Date();
		await user.save();

		res.status(200).json({
			success: true,
			message: "Logged in successfully",
			user: {
				...user._doc,
				password: undefined,
			},
		});
	} catch (error) {
		console.log("Error in login ", error);
		res.status(400).json({ success: false, message: error.message });
	}
} 

// this is my forgetpassword functions
export const forgetpassword = async (req, res) =>{
	const {email} = req.body;
	try {
		const user = await User.findOne({email})
		
		if(!user){
			res.status(500).json({ success: false, message: "User not fund for now"});
		}

		// Generating something now... like a reset token
		const resetToken = crypto.randomBytes(20).toString("hex")
		const resetTokenExpiresAt = Date.now() + 2 * 60 * 60 * 1000; // delay of 2 hours
		user.resetPasswordToken = resetToken
		user.resetPasswordExpiresAt = resetTokenExpiresAt

		await user.save()

		// send Email
		await sendPasswordResetEmail(user.email, `http://localhost:5173/reset-password/${resetToken}`)
	} catch (error) {
		
	}
}

// this is my singout function
export const singout = async(req, res) =>{
	res.clearCookie("token");
	res.status(200).json({ success: true, message: "Logged out successfully" });
} 


