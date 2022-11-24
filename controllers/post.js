import Post from "../models/Post.js";

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
