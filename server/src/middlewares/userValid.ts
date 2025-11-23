import type { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import jwt from "jsonwebtoken";
const key = process.env.SECRETKEY || "jsonwebtoken";
export interface AuthRequest extends Request {
  userID?: Types.ObjectId;
}
export const userValid = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "Refresh the page",
      });
    }
    if (!key) {
      return res.status(401).json({
        message: "Internal server error",
      });
    }

    const decode = jwt.verify(token, key);
    if (typeof decode !== "object" || !("userID" in decode)) {
      throw new Error("Invalid token payload");
    }
    req.userID = decode.userID;

    next();
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({
      message: "server error",
    });
  }
};
