import Course from "../models/Course.js";

// Create Course
export const createCourse = async (req, res) => {
  try {
    const { title, description, level } = req.body;

    const course = await Course.create({
      title,
      description,
      level,
      createdBy: req.user._id,
    });

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Courses
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("createdBy", "name email");
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Enroll in Course
export const enrollCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    if (course.studentsEnrolled.includes(req.user._id)) {
      return res.status(400).json({ message: "Already enrolled" });
    }

    course.studentsEnrolled.push(req.user._id);
    await course.save();

    res.json({ message: "Enrolled successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};