const mongoose = require("mongoose");

const InsulinSchema = mongoose.Schema({
  insulin: {
    type: String,
    required: [true, "You must enter a type of insulin"],
  },
  dosage: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = InsulinSchema;
