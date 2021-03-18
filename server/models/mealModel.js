const mongoose = require("mongoose");

const MealSchema = mongoose.Schema({
  meal: {
    type: String,
    required: [true, "You must enter an meal"],
  },
  nutrients: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = MealSchema;
