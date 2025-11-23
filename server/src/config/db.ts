import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbUrl = (process.env.DBURL as string) || "mongodb://localhost:27017/";
const dbConnect = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("connected successfully");
  } catch (error) {
    console.log("Error while connecting to database", error);
    process.exit(1);
  }
};
export default dbConnect;
