import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "./asyncHandler.js";

export const authenticate = asyncHandler(async (req, res, next) => {
  let token;

  //to read "access-token"
  token = req.cookies.token;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {}
  } else {
    res.status(401);
    throw new Error("Not authorized , No token");
  }
});

//check for admin
export const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({ message: "Not admin" });
  }
};
