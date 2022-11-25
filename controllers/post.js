import Post from "../models/Post.js";
import { createError } from "../utils/error.js";

export const createPost = async (req, res, next) => {
  try {
    const post = new Post({
      ...req.body,
    });
    const result = await post.save();
    res.status(201).json(result);
  } catch (error) {}
};

export const getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

export const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return next(createError(404, "Post not found!"));
    if (req.user.id === post.userId) {
      const updatePost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json("Post has been updated");
    } else {
      return next(
        createError(403, "You do not have permission to update this post")
      );
    }
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return next(createError(404, "Not Found"));
    if (req.user.id === post.userId) {
      await Post.findByIdAndDelete(post);
      res.status(200).json("Post has been deleted!");
    } else {
      return next(
        createError(403, "You do not have permission to delete this post")
      );
    }
  } catch (error) {
    next(error);
  }
};
