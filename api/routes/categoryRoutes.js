import express from "express";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import {
  createCategory,
  getAllCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/category", authenticate, authorizeAdmin, createCategory);
router.get("/category", authenticate, authorizeAdmin, getAllCategory);

export default router;
