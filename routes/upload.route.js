const express = require("express");
const router = express.Router();
const upload = require("../config/upload");

router.post("/upload/profile/:userId", upload.single("profile"), (req, res) => {
  res.json({
    message: "Profile uploaded successfully",
    file: req.file,
  });
});

router.post(
  "/upload/document/:studentId",
  upload.single("document"),
  (req, res) => {
    res.json({
      message: "Document uploaded successfully",
      file: req.file,
    });
  }
);

module.exports = router;
