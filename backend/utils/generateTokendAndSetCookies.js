import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const generateTokendAndSetCookies = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.SECRET_KEYJWT, {
        expiresIn: "7d",
    });

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // Corrected to account for 7 days in milliseconds
    });
    return token
 };
