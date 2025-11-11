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
  const { amount, to } = req.body;
  const account = await Account.findOne({
    userid: req.userID,
  });
  if (!account) {
    return res.json({ message: "Please create account first" });
  }
  if (!amount || !to) {
    return res.status(400).json({
      message: "Please enter the amount to transfer and the recepient account",
    });
  }
  const check = await User.findOne({
    username: to,
  });
  if (!check) {
    return res.json({
      message: "Please enter valid name",
    });
  }
  if (!account.balance < amount) {
    return res.json({
      message: "Balance is too low",
    });
  }
  const checkRecepient = await Account.findOne({
    userid: check._id,
  });
  if (!checkRecepient) {
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
  );
  await Account.updateOne(
    {
      userid: check._id,
    },
    {
      $inc: {
        balance: -amount,
      },
    }
  );
  res.json({
    message: "Amount transferred successfully, your balance is",
    balance: account.balance,
  });
};
