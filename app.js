// app.js
const express = require("express");
const cors = require("cors");
const uploadRoutes = require("./routes/upload.route");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Server is running successfully");
});

app.use("/uploads", express.static("uploads")); // serve static files

app.use("/api", uploadRoutes);

module.exports = app;
