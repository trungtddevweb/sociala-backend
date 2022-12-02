import User from "../models/User.js";

export const getUser = (req, res, next) => {
  try {
    const user = User.findOne(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
