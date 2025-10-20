const express = require("express");
const courseRoutes = express.Router();
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/course.controller");

// 🔹 Routes
courseRoutes.get("/", getAllCourses);
courseRoutes.get("/:id", getCourseById);
courseRoutes.post("/", createCourse);
courseRoutes.put("/:id", updateCourse);
courseRoutes.delete("/:id", deleteCourse);

module.exports = courseRoutes;
