import User from "../models/User.js";

export const getUser = (req, res, next) => {
  try {
    const user = User.findOne(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getAllUser = (req, res, next) => {
  try {
    const users = User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
