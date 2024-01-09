import express from "express";
import {
  createUser,
  getAllUser,
  loginUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/users", createUser);
router.post("/auth", loginUser);
router.get("/users", getAllUser);
export default router;
