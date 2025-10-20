const body = require("express-validator").body;

exports.registerValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters"),

  body("email").isEmail().withMessage("Invalid email"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .matches(/[0-9!@#$%^&*]/)
    .withMessage("Password must include a number or special character"),

  body("dob").optional().isDate().withMessage("Invalid date of birth"),

  body("class").optional().notEmpty().withMessage("Class name is required"),

  body("code")
    .optional()
    .matches(/^[A-Z0-9]+$/)
    .withMessage("Code must contain only uppercase letters and numbers"),

  body("maxStudents")
    .optional()
    .isInt({ gt: 0 })
    .withMessage("maxStudents must be a positive integer"),
];

