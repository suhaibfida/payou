import express from "express";
import { signup, login } from "./../controllers/auth.js";
import { Router } from "express";
import { userValid } from "./../middlewares/userValid.js";
import { update } from "./../controllers/create.js";
import { balance, transfer } from "./../controllers/account.js";
const router = Router();

router.post("/register", signup);
router.post("/login", login);
router.post("/update", userValid, update);
router.get("/account/balance", userValid, balance);
router.post("/account/transfer", userValid, transfer);
export default router;
