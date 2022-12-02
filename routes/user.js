import express from "express";
import { getAllUser, getUser } from "../controllers/user.js";

const router = express.Router();

// Get A User
router.get("/:id", getUser);

// Get all users
router.get("/", getAllUser);

export default router;
