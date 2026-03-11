import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createCourse,
  getCourses,
  enrollCourse,
} from "../controllers/courseController.js";

const router = express.Router();

router.post("/", protect, createCourse);
router.get("/", getCourses);
router.post("/enroll/:id", protect, enrollCourse);

export default router;
