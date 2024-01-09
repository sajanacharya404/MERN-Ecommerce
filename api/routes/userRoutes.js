import express from "express";
import {
  createUser,
  getAllUser,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/users", createUser);
router.post("/auth", loginUser);
router.post("/logout", logoutUser);
router.get("/users", getAllUser);
export default router;
