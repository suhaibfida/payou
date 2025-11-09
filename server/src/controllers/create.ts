import type { Request, Response } from "express";
import { z } from "zod";
import user from "../models/userModel.js";
import type { AuthRequest } from "./../middlewares/userValid.js";
interface update {
  firstName: string;
  lastName: string;
  password: string;
}
export const update = async (req: AuthRequest, res: Response) => {
  const schema = z.object({
    firstName: z
      .string()
      .min(3)
      .max(15)
      .optional()
      .transform((v) => (v?.trim() === "" ? undefined : v?.trim())),
    lastName: z
      .string()
      .optional()
      .transform((v) => (v?.trim() === "" ? undefined : v?.trim())),
    password: z
      .string()
      .min(8)
      .max(100)
      .optional()
      .transform((v) => (v === "" ? undefined : v)),
  });
  const safeParse = schema.safeParse(req.body);
  if (!safeParse.success) {
    return res.json({
      message: "Zod validation failed",
    });
  }
  try {
    const data = Object.fromEntries(
      Object.entries(safeParse.data).filter(([, v]) => v)
    );
    if (Object.keys(data).length === 0) {
      return res.status(400).json({
        message: "Empty fields",
      });
    }
    if (!req.userID) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    const update = await user.updateOne(
      { _id: req.userID },
      { $set: data },
      { runValidators: true }
    );
    if (update.matchedCount === 0) {
      return res.json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "User details updated successfully" });
  } catch (error) {
    console.log("Error"), error;
    return res.status(500).json({
      message: "Server error",
    });
  }
};
export const find = async (req: AuthRequest, res: Response) => {
  const filter = req.query.filter || "";

  const users = await user.find({
    // we did extra work here to check firstName and lastname otherwise username is enough
    // $or: [
    //   {
    //     firstName: { $regex: filter },
    //   },
    //   {
    //     lastName: {
    //       $regex: filter,
    //     },
    //   },
    // ],
    username: { $regex: filter, $options: "i" },
  });
  res.json({
    user: users.map((user) => ({
      username: user.username,
      _id: user._id,
    })),
  });
};
