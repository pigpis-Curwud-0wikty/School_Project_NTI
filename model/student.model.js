const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    studentId: { type: String, required: true, unique: true },
    gradeLevel: { type: String, required: true },
    dateOfBirth: { type: Date },
    address: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
