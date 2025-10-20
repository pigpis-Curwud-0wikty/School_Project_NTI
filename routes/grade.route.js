const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");

const router = express.Router();

router.post(
  "/add",
  authMiddleware,
  roleMiddleware(["teacher", "admin"]),
  (req, res) => {
    res.json({ message: "Grade added successfully" });
  }
);

module.exports = router;
