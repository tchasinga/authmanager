import express from "express";
import dotenv from "dotenv";
import mongoconnection from "./db/mongoconnection.js";


// initate express
const app = express();
dotenv.config();
const PORT = process.env.PORT;


app.listen(PORT, () => {
    mongoconnection();
    console.log(`server is running on port ${PORT}`);
  });