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
router.get("/", getAllGrades);
router.post("/", assignGrade);
router.put("/:id", updateGrade);
router.delete("/:id", deleteGrade);
router.post(
  "/add",
  authMiddleware,
  roleMiddleware(["teacher", "admin"]),
  (req, res) => {
    res.json({ message: "Grade added successfully" });
  }
);

module.exports = gradeRoutes;
