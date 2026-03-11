import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import performanceRoutes from "./routes/performanceRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";

import progressRoutes from "./routes/progressRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: "http://localhost:5173", // React frontend
  credentials: true
}));


app.use(express.json());

app.use("/api/progress", progressRoutes);
app.use("/api/courses", courseRoutes);

app.use("/api/auth", authRoutes);
app.use("/api/performance", performanceRoutes);

app.get("/", (req, res) => {
  res.send("AI EdTech API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});