import asyncHandler from "../middlewares/asyncHandler.js";
import { Product } from "../models/productModel.js";

export const createProduct = asyncHandler(async (req, res) => {
  try {
    res.send("Hello");
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});
