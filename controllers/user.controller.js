const User = require("../model/User");

exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId).select("-passwordHash");
    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

exports.updateMe = async (req, res, next) => {
  try {
    const updates = {};
    if (req.body.name) updates.name = req.body.name;
    if (req.file && req.file.path) updates.profilePic = req.file.path;
    const user = await User.findByIdAndUpdate(req.user.userId, updates, {
      new: true,
    }).select("-passwordHash");
    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};
