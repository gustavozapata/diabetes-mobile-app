const User = require("../models/userModel");

exports.getEntries = async (req, res, next) => {
  try {
    const entries = await User.findOne({ _id: req.params.id });

    res.status(200).json({
      status: "success",
      data: entries,
    });
  } catch (err) {
    console.log("Diabetes App Error: ", err);
  }
};
