import express from "express";
import { updateProgress, getMyProgress } from "../controllers/progressController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, updateProgress);
router.get("/me", protect, getMyProgress);

export default router;
