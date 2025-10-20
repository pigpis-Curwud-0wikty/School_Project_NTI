const express = require("express");
const router = express.Router();
const {
  getAllEnrollments,
  enrollStudent,
  deleteEnrollment,
} = require("../controllers/enrollment.controller");

// 🔹 Routes
router.get("/", getAllEnrollments);
router.post("/", enrollStudent);
router.delete("/:id", deleteEnrollment);

module.exports = router;
