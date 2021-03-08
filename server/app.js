const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");

const app = express();

//to allows connections from any IP address
app.use(cors());

//to access body of request
app.use(express.json());

app.use("/api/users", userRouter);

module.exports = app;
