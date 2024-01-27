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

export const getCategory = asyncHandler(async (req, res) => {
  const { categoryId } = req.params;
  try {
    const category = await Category.findById({ _id: categoryId });
    res.status(200).json(category);
  } catch (error) {
    res.status(404);
  }
});

export const updateCurrentCategory = asyncHandler(async (req, res) => {
  const { categoryId } = req.params;
  try {
    const category = await Category.findOne({ _id: categoryId });
    if (category) {
      category.name = req.body.name;
    }
    const updatedCategory = await category.save();
    res.status(200).json({
      _id: updatedCategory._id,
      name: updatedCategory.name,
    });
  } catch (error) {
    res.status(404);
    throw new Error("Category Not found");
  }
});

export const deleteCategory = asyncHandler(async (req, res) => {
  const { categoryId } = req.params;
  try {
    const category = await Category.findById({ _id: categoryId });
    if (!category) {
      res.status(404).json({ message: "Category not found" });
    }
    await Category.deleteOne({ _id: categoryId });
    res.status(200).json({ message: "Category Deleted" });
  } catch (error) {
    res.status(404);
    throw new Error("Category Not found");
  }
});
