import asyncHandler from "../middlewares/asyncHandler.js";
import { Category } from "../models/categoryModel.js";

export const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!name.trim()) {
    return res.json({ error: "Name is required " });
  }
  const existingCategory = await Category.findOne({ name });
  if (existingCategory) {
    return res.status(400).json({ message: "Category already exists" });
  }

  try {
    const category = await Category.create({
      name,
    });
    res
      .status(201)
      .json({ message: "Category created successfully", category });
  } catch (error) {
    res.status(500);
  }
});

export const getAllCategory = asyncHandler(async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (error) {
    res.status(404);
  }
});
