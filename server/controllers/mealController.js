const User = require("../models/userModel");

exports.getMeals = async (req, res, next) => {
  try {
    const meals = await User.findOne({ _id: req.params.id }).select("meals");

    res.status(200).json({
      status: "success getting",
      data: meals.meals,
    });
  } catch (err) {
    console.log("Diabetes App Error: ", err);
  }
};

exports.addMeal = async (req, res, next) => {
  try {
    const newMeal = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: { meals: req.body.meal },
      },
      { new: true }
    ).select("+password");

    res.status(201).json({
      status: "sucess posting",
      data: newMeal,
    });
  } catch (err) {
    console.log("Diabetes App Error: ", err);
  }
};
