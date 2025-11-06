import express from "express";
import dbConnect from "./config/db.js";
import router from "./routes/pageRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
app.use(cookieParser());
const port = process.env.PORT;
dbConnect();
app.use(express.json());
app.use(
  cors({
    origin: process.env.CURL,
    credentials: true,
  })
);
app.use("/api/v1", router);
app.listen(port, () => {
  console.log("Server is running");
});
