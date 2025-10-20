const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");
const {
  getAllGrades,
  assignGrade,
  updateGrade,
  deleteGrade,
} = require("../controllers/grade.controller");

const gradeRoutes = express.Router();

// 🔹 Routes
gradeRoutes.get("/", getAllGrades);
gradeRoutes.post("/", assignGrade);
gradeRoutes.put("/:id", updateGrade);
gradeRoutes.delete("/:id", deleteGrade);
gradeRoutes.post(
  "/add",
  authMiddleware,
  roleMiddleware(["teacher", "admin"]),
  (req, res) => {
    res.json({ message: "Grade added successfully" });
  }
);

module.exports = gradeRoutes;
