import express from "express";
import { deleteUser, getAllUser, getUser } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// Get A User
router.get("/:id", getUser);

// Get all users
router.get("/", getAllUser);

// Delete a User
router.delete("/:id", verifyToken, deleteUser);

export default router;
