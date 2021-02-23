const express = require("express");
const controller = require("../controllers/measurementController");
const router = express.Router();

router
  .route("/")
  .get(controller.getMeasurements)
  .post(controller.addMeasurement);

module.exports = router;
