import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = res.cookies.access_token;
  if (!token) return next(createError(401, "You are not authentication"));
  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) return next(createError(403, "Token is invalid"));
    req.user = user;
    next();
  });
};
