import express from "express";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import { createProduct } from "../controllers/productController.js";
import formidable from "express-formidable";
import checkId from "../middlewares/checkId.js";
const router = express.Router();

router.post(
  "/product",
  authenticate,
  authorizeAdmin,
  formidable(),
  createProduct
);
export default router;
