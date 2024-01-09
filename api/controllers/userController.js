import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcrypt";
import createToken from "../utils/createToken.js";

export const createUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  if ((!name, !email, !password)) {
    throw new Error("Please fill all the inputs.");
  }
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json("User already exists");
  const hashedPassword = bcrypt.hashSync(password, 10);
  try {
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    createToken(res, newUser._id);
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if ((!email, !password)) {
    throw new Error("Please fill all the inputs.");
  }
  const existingUser = await User.findOne({ email });
  if (!existingUser) return res.status(400).json("User doesnot exists");
  const comparePassword = bcrypt.compareSync(password, existingUser.password);
  if (comparePassword) {
    createToken(res, existingUser._id);
    res.status(200).json({
      _id: existingUser._id,
      name: existingUser.email,
      email: existingUser.email,
      isAdmin: existingUser.isAdmin,
    });
    return;
  }
});

export const getAllUser = asyncHandler(async (req, res, next) => {
  const userData = await User.find();
  res.status(200).json({
    _id: userData._id,
    name: userData.email,
    email: userData.email,
    isAdmin: userData.isAdmin,
  });
});

export const logoutUser = asyncHandler(async (req, res, next) => {
  res.cookie("access-token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logout successfully" });
});
