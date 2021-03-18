const mongoose = require("mongoose");

const InsulinSchema = mongoose.Schema({
  insulin: {
    type: String,
    required: [true, "You must enter an insulin"],
  },
  values: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = InsulinSchema;
