const User = require("../models/userModel");

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  //check if email and password were entered
  if (!email || !password) {
    return console.log("Please provide email and password");
  }

  let user = await User.findOne({ email }).select("+password"); //we +pass since in the schema is selected: false
  let code = 200;
  let status = "success";
  let message = "";
  let isLogged = true;

  //check if user exists and password is correct
  if (!user || !(await user.checkPassword(password, user.password))) {
    code = 401;
    status = "error";
    user = {};
    message = "Incorrect email or password";
    isLogged = false;
  }

  res.status(code).json({
    status,
    data: user,
    message,
    isLogged,
  });
};

exports.signup = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const newUser = await User.create({ email, password });
    res.status(201).json({
      status: "success",
      data: newUser,
      isLogged: true,
    });
  } catch (err) {
    console.log("Diabetes App Error: ", err);
  }
};
