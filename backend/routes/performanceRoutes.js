import express from "express";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// all performance endpoints require a valid JWT
router.use(protect);

// Placeholder routes
router.get("/", (req, res) => {
  res.json({ message: "Performance routes" });
});

export default router;
