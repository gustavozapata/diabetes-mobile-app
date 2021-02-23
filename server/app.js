const express = require("express");
const cors = require("cors");
const measurementRouter = require("./routes/measurementRoutes");

const app = express();

//to allows connections from any IP address
app.use(cors());

//to access body of request
app.use(express.json());

app.use("/api/measurements", measurementRouter);

module.exports = app;
