const Measurement = require("../models/measurementModel");

exports.getMeasurements = async (req, res, next) => {
  try {
    const measurements = await Measurement.find();

    res.status(200).json({
      status: "success getting",
      data: measurements,
    });
  } catch (err) {
    console.log("Diabetes App Error: ", err);
  }
};

exports.addMeasurement = async (req, res, next) => {
  const measurement = await Measurement.create(req.body);
  try {
    res.status(201).json({
      status: "sucess posting",
      data: measurement,
    });
  } catch (err) {
    console.log("Diabetes App Error: ", err);
  }
};
