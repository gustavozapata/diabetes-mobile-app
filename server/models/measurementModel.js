const mongoose = require("mongoose");

const MeasurementSchema = mongoose.Schema({
  name: {
    type: String,
  },
  value: Number,
  date: Date,
});

const Measurement = mongoose.model("measurements", MeasurementSchema);

module.exports = Measurement;
