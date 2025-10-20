const express = require("express");
const { registerValidation } = require("../middleware/user.validator");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../model/user.model");

const userRoutes = express.Router();

userRoutes.post("/register", registerValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword, role });

  await newUser.save();
  res.status(201).json({ message: "User registered successfully" });
});

module.exports = userRoutes;
