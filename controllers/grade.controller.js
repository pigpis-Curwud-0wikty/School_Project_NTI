const Grade = require("../model/grade.model");
const Enrollment = require("../model/enrollment.model");

// 🟢 Get all grades
exports.getAllGrades = async (req, res) => {
  try {
    const grades = await Grade.find()
      .populate("enrollment")
      .populate({
        path: "enrollment",
        populate: { path: "student course" },
      });
    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json({ message: "Error fetching grades", error });
  }
};

// 🟢 Assign grade to enrollment
exports.assignGrade = async (req, res) => {
  try {
    const { enrollmentId, score } = req.body;

    const enrollment = await Enrollment.findById(enrollmentId);
    if (!enrollment)
      return res.status(404).json({ message: "Enrollment not found" });

    const newGrade = new Grade({ enrollment: enrollmentId, score });
    await newGrade.save();

    res.status(201).json({ message: "Grade assigned successfully", newGrade });
  } catch (error) {
    res.status(400).json({ message: "Error assigning grade", error });
  }
};

// 🟢 Update grade
exports.updateGrade = async (req, res) => {
  try {
    const updated = await Grade.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Grade not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error updating grade", error });
  }
};

// 🟢 Delete grade
exports.deleteGrade = async (req, res) => {
  try {
    const deleted = await Grade.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Grade not found" });
    res.status(200).json({ message: "Grade deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting grade", error });
  }
};
