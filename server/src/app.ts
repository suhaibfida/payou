import express from "express";
import dbConnect from "./config/db.js";
import router from "./routes/pageRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
const port = process.env.PORT;
dotenv.config();
dbConnect();
app.use(express.json());
app.use(
  cors({
    origin: process.env.CURL,
    credentials: true,
  })
);
app.use("/api/v1/", router);
app.listen(port, () => {
  console.log("Server is running");
});
