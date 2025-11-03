import express from "express";
import { signup, login } from "./../controllers/auth.js";
import { Router } from "express";
const router = Router();

router.get("/register", signup);
router.get("/login", login);
export default router;
