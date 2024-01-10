import express from "express";
import {
  createUser,
  getAllUsers,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/users", createUser);
router.post("/auth", loginUser);
router.post("/logout", logoutUser);
router.get("/users", authenticate, authorizeAdmin, getAllUsers);
export default router;
