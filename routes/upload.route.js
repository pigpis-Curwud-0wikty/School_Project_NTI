const express = require("express");
const uploadRoutes = express.Router();
const upload = require("../config/upload");

uploadRoutes.post("/upload/profile/:userId", upload.single("profile"), (req, res) => {
  res.json({
    message: "Profile uploaded successfully",
    file: req.file,
  });
});

uploadRoutes.post(
  "/upload/document/:studentId",
  upload.single("document"),
  (req, res) => {
    res.json({
      message: "Document uploaded successfully",
      file: req.file,
    });
  }
);

module.exports = uploadRoutes;
