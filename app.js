// app.js
const express = require("express");
const cors = require("cors");
const uploadRoutes = require("./routes/upload.route");
const enrollmentRoutes = require("./routes/enrollment.route");
const gradeRoutes = require("./routes/grade.route");
const courseRoutes = require("./routes/course.route");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/courses", courseRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/grades", gradeRoutes);
// Sample route
app.get("/", (req, res) => {
  res.send("Server is running successfully");
});

app.use("/uploads", express.static("uploads")); // serve static files

app.use("/api", uploadRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/grades", gradeRoutes);

module.exports = app;
