import express from "express";
import { login, logout, register } from "../controllers/auth.js";

const router = express.Router();

// Create user
router.post("/register", register);

// Login
router.post("/login", login);

// Logout
router.post("/logout", logout);

export default router;
