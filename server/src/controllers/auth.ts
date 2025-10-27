import type { Request, Response } from "express";
import user from "../models/userModel.js";
import bcrypt from "bcrypt";
import { z } from "zod";
interface SignupBody {
  username: string;
  email: string;
  password: string;
}
export const signup = async (req: Request, res: Response) => {
  const schema = z.object({
    username: z.string().min(8).max(20),
    email: z.string().min(8).max(50),
    password: z.string().min(8).max(50),
  });
  const safeParse = schema.safeParse(req.body);
  if (!safeParse.success) {
    console.log("zod validation failed:", safeParse.error.issues);
    res.status(400).json({
      message: "Incorrect format",
      error: safeParse.error.issues,
    });
    return;
  }
  const { username, email, password }: SignupBody = req.body;

  try {
    const check = await user.findOne({
      email: email,
    });
    if (check) {
      res.status(409).json({
        message: "Email already taken",
      });
      return;
    }
    const salt = 6;
    const hashedPassword = await bcrypt.hash(password, salt);
    const create = await user.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    res.status(201).json({
      message: "User created successfully",
    });
    return;
  } catch (error) {
    console.log("Signup error");
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
