import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt, { compare } from "bcrypt";
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
  if (!comparePassword) {
    return res.status(402).json({ message: "User credentials not match" });
  }
  if (comparePassword) {
    createToken(res, existingUser._id);
    res.status(200).json({
      _id: existingUser._id,
      name: existingUser.name,
      email: existingUser.email,
      isAdmin: existingUser.isAdmin,
    });
    return;
  }
});

export const getAllUsers = asyncHandler(async (req, res) => {
  const usersData = await User.find();
  res.status(200).json(usersData);
});

export const getCurrentUser = asyncHandler(async (req, res) => {
  const userData = await User.findById(req.user._id);
  if (userData) {
    res.status(200).json({
      _id: userData._id,
      name: userData.name,
      email: userData.email,
    });
  } else {
    res.status(404);
    throw new Error("User Not found");
  }
});

export const updateCurrentUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      user.password = hashedPassword;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found ");
  }
});
export const deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (user) {
    if (user.isAdmin) {
      res.status(400);
      throw new Error("Admin cannot deleted");
    }
    await User.deleteOne({ _id: user._id });
    res.json({ message: "User deleted" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export const logoutUser = asyncHandler(async (req, res, next) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logout successfully" });
});
