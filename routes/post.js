import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post.js";
import { verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

// Create a new POST
router.post("/", createPost);

// Get a Post
router.get("/:id", getPost);

// Get all Posts
router.get("/", getPosts);

// Update a Post
router.put("/:id", verifyToken, updatePost);

// Delete a Post
router.delete("/:id", verifyToken, deletePost);

export default router;
