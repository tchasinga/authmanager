import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import mongoconnection from "./db/mongoconnection.js";
import authRoutes from './routes/auth.route.js'


// initate express
const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "*",
    ],
    credentials: true,
    allowedHeaders: "*", // or list specific headers if needed
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
  })
);




app.listen(PORT, () => {
    mongoconnection();
    console.log(`server is running on port ${PORT}`);
  });


  app.use("/api/auth", authRoutes)