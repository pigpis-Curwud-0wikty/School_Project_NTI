const multer = require("multer");
const fs = require("fs");
const path = require("path");

const allowedImageTypes = ["image/jpeg", "image/png"];
const allowedDocTypes = ["application/pdf", ...allowedImageTypes];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let baseDir = "uploads";
    let folder = "";

    if (file.fieldname === "profile") {
      const userId = req.params.userId || req.body.userId;
      folder = path.join(baseDir, `profiles/user_${userId}`);
    } else if (file.fieldname === "document") {
      const studentId = req.params.studentId || req.body.studentId;
      folder = path.join(baseDir, `documents/student_${studentId}`);
    } else {
      folder = path.join(baseDir, "others");
    }

    fs.mkdirSync(folder, { recursive: true });
    cb(null, folder);
  },

  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}_${Date.now()}${ext}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.fieldname === "profile" &&
    !allowedImageTypes.includes(file.mimetype)
  ) {
    return cb(
      new Error("Only .jpg and .png allowed for profile pictures"),
      false
    );
  }
  if (
    file.fieldname === "document" &&
    !allowedDocTypes.includes(file.mimetype)
  ) {
    return cb(new Error("Only .pdf, .jpg, .png allowed for documents"), false);
  }
  cb(null, true);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = upload;
