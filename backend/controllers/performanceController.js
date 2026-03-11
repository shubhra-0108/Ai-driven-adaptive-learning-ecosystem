import Performance from "../models/Performance.js";

export const getPerformance = async (req, res) => {
  try {
    const performance = await Performance.find({ userId: req.userId });
    res.json(performance);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving performance", error });
  }
};
