import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const urlmongoDB = process.env.MONGODB_URL;

const mongoconnection = async () => {
  try {
    await mongoose.connect(urlmongoDB, {
      useNewUrlParser: true,
    });
    console.log("✅ Connected successfully to MongoDB");
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error);
  }
};

export default mongoconnection;