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
