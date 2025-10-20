const Enrollment = require("../model/enrollment.model");
const Course = require("../model/course.model");
const User = require("../model/user.model");

// 🟢 Get all enrollments
exports.getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find()
      .populate("student")
      .populate("course");
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching enrollments", error });
  }
};

// 🟢 Enroll a student in a course
exports.enrollStudent = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;

    const student = await User.findById(studentId);
    const course = await Course.findById(courseId);

    if (!student || !course)
      return res.status(404).json({ message: "Student or course not found" });

    const existingEnrollment = await Enrollment.findOne({
      student: studentId,
      course: courseId,
    });

    if (existingEnrollment)
      return res
        .status(400)
        .json({ message: "Student already enrolled in this course" });

    const newEnrollment = new Enrollment({
      student: studentId,
      course: courseId,
    });
    await newEnrollment.save();

    res
      .status(201)
      .json({ message: "Student enrolled successfully", newEnrollment });
  } catch (error) {
    res.status(400).json({ message: "Error enrolling student", error });
  }
};

// 🟢 Delete enrollment
exports.deleteEnrollment = async (req, res) => {
  try {
    const deleted = await Enrollment.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Enrollment not found" });
    res.status(200).json({ message: "Enrollment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting enrollment", error });
  }
};
