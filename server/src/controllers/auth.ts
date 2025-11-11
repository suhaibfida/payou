import express from "express";
import type { Request, Response } from "express";
import { User, Account } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { z } from "zod";
import jwt from "jsonwebtoken";

interface SignupBody {
  username: string;
  email: string;
  password: string;
}
export const signup = async (req: Request, res: Response) => {
  const schema = z.object({
    username: z.string().min(8).max(20),
    email: z.string().trim().toLowerCase(),
    password: z.string().min(8).max(50),
  });
  const safeParse = schema.safeParse(req.body);
  if (!safeParse.success) {
    console.log("zod validation failed:", safeParse.error.issues);
    return res.status(400).json({
      message: "Incorrect format",
      error: safeParse.error.issues,
    });
  }

  try {
    const check = await User.findOne({
      email: safeParse.data.email,
    });
    if (check) {
      res.status(409).json({
        message: "Email already taken",
      });
      return;
    }
    const salt = 6;
    const hashedPassword = await bcrypt.hash(safeParse.data.password, salt);
    const user = await User.create({
      username: safeParse.data.username,
      email: safeParse.data.email,
      password: hashedPassword,
    });
    await Account.create({
      userId: user._id,
      balance: 1 + Math.random() * 10000,
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

export const login = async (req: Request, res: Response) => {
  const schema = z.object({
    email: z.string().min(3).max(20),
    password: z.string().min(8),
  });
  const safeParse = schema.safeParse(req.body);
  if (!safeParse.success) {
    return res.json("Incorrect format");
  }
  try {
    const Users = await User.findOne({
      email: safeParse.data.email,
    });
    if (
      !Users ||
      !Users.password ||
      !(await bcrypt.compare(safeParse.data.password, Users.password))
    ) {
      return res.json({
        message: "Invalid credentials",
      });
    }

    const secretKey = process.env.SECRETKEY;
    if (!secretKey) {
      return console.log("key is missing");
    }

    const token = jwt.sign({ userId: Users._id }, secretKey, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "PRODUCTION",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7 * 1000,
    });
    return res.status(200).json({
      message: "successfully created",
      user: {
        Email: safeParse.data.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
};
