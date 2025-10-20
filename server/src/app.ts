import express from "express";
import dbConnect from "./config/db.js";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;
dbConnect();
app.listen(port, () => {
  console.log("Server is running");
});
