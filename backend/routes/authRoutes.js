import express from "express";
import { register, login } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// profile route only accessible to authenticated users
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

router.post("/register", register);
router.post("/login", login);

export default router;
