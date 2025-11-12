import mongoose from "mongoose";
import type { AuthRequest } from "./../middlewares/userValid.js";
import type { Response } from "express";
import { User, Account } from "./../models/userModel.js";
export const balance = async (req: AuthRequest, res: Response) => {
  const checkBalance = await Account.findOne({
    userId: req.userID,
  });
  if (!checkBalance) {
    return res.json({
      message: "Account doesn't exist ,Please create account first",
    });
  }
  res.json({
    message: "Balance is:",
    balance: checkBalance.balance,
  });
};
export const transfer = async (req: AuthRequest, res: Response) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  const { amount, to } = req.body;
  const account = await Account.findOne({
    userid: req.userID,
  }).session(session);
  if (!account) {
    await session.abortTransaction();
    session.endSession();
    return res.json({ message: "Please create account first" });
  }
  if (!amount || !to) {
    await session.abortTransaction();
    session.endSession();
    return res.status(400).json({
      message: "Please enter the amount to transfer and the recepient account",
    });
  }
  const check = await User.findOne({
    username: to,
  }).session(session);
  if (!check) {
    await session.abortTransaction();
    session.endSession();
    return res.json({
      message: "Please enter valid name",
    });
  }
  if (account.balance < amount) {
    await session.abortTransaction();
    session.endSession();
    return res.json({
      message: "Balance is too low",
    });
  }
  const checkRecepient = await Account.findOne({
    userid: check._id,
  }).session(session);
  if (!checkRecepient) {
    session.abortTransaction();
    session.endSession();
    return res.json({
      message: "User Account does not exist",
    });
  }
  const update = await Account.updateOne(
    {
      userid: req.userID,
    },
    {
      $inc: {
        balance: -amount,
      },
    }
  ).session(session);
  const recep = await Account.updateOne(
    {
      userid: check._id,
    },
    {
      $inc: {
        balance: amount,
      },
    }
  ).session(session);
  await session.commitTransaction();
  res.json({
    message: "Amount transferred successfully, your balance is",
    balance: account.balance,
  });
};
