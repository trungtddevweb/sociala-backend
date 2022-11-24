import express from "express";
import { createPost, getPost } from "../controllers/post.js";
const router = express.Router();

// Create a new POST
router.post("/", createPost);

// Get a Post
router.get("/:id", getPost);

// // Get all Posts
// router.get("/posts", getPosts);

// // Update a Post
// router.put("/:id", updatePost);

// // Delete a Post
// router.delete("/:id", deletePost);

export default router;
