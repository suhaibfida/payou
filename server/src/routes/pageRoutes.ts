import express from "express";
import { signup, login } from "./../controllers/auth.js";
import { Router } from "express";
import { userValid } from "./../middlewares/userValid.js";
import { update } from "./../controllers/create.js";
const router = Router();

router.get("/register", signup);
router.get("/login", login);
router.get("update", userValid, update);
export default router;
