import Progress from "../models/progressModel.js";

export const updateProgress = async (req, res) => {
  const { courseId, completionPercentage, quizScore } = req.body;

  const progress = await Progress.findOne({
    user: req.user._id,
    course: courseId,
  });

  if (progress) {
    progress.completionPercentage = completionPercentage;
    progress.quizScore = quizScore;
    progress.completed = completionPercentage === 100;

    const updated = await progress.save();
    res.json(updated);
  } else {
    const newProgress = await Progress.create({
      user: req.user._id,
      course: courseId,
      completionPercentage,
      quizScore,
      completed: completionPercentage === 100,
    });

    res.status(201).json(newProgress);
  }
};

export const getMyProgress = async (req, res) => {
  const progress = await Progress.find({ user: req.user._id }).populate("course", "title");

  res.json(progress);
};