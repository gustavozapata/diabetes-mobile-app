const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const mealRouter = require("./routes/mealRoutes");
const insulinRouter = require("./routes/insulinRoutes");

const app = express();

//to allows connections from any IP address
app.use(cors());

//to access body of request
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/meals", mealRouter);
app.use("/api/insulin", insulinRouter);

module.exports = app;
