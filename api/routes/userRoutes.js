import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getCurrentUser,
  loginUser,
  logoutUser,
  updateCurrentUser,
} from "../controllers/userController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/users", createUser);
router.post("/auth", loginUser);
router.post("/logout", logoutUser);
router.get("/users", authenticate, authorizeAdmin, getAllUsers);
router.get("/profile", authenticate, getCurrentUser);
router.put("/profile", authenticate, updateCurrentUser);
router.delete("/users/:id", authenticate, authorizeAdmin, deleteUser);
export default router;
