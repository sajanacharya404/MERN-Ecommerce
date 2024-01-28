import express from "express";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import { createProduct } from "../controllers/productController.js";
const router = express.Router();

router.post("/product", authenticate, authorizeAdmin, createProduct);
export default router;
