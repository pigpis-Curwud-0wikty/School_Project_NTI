const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema(
  {
    enrollment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Enrollment",
      required: true,
    },
    score: { type: Number, required: true },
    letterGrade: { type: String }, 
    remarks: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Grade", gradeSchema);
