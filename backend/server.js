import express from "express";
import dotenv from "dotenv";
import mongoconnection from "./db/mongoconnection.js";
import authRoutes from './routes/auth.route.js'


// initate express
const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json)


app.listen(PORT, () => {
    mongoconnection();
    console.log(`server is running on port ${PORT}`);
  });


  app.use("/api/auth", authRoutes)