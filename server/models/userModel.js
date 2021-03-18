const mongoose = require("mongoose");
const MealSchema = require("../models/mealModel");
const InsulinSchema = require("../models/mealModel");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "You must enter an email"],
    unique: true,
    lowecase: true, //converts email to lowercase
    trim: true,
  },
  password: {
    type: String,
    required: [true, "You must enter a password"],
    minlength: 3, //password length must be minumum 5 character
    select: false, //do not send this field when select user
  },
  meals: [MealSchema],
  insulin: [InsulinSchema],
});

//pre 'save' runs before saving (create, post) into the db
UserSchema.pre("save", async function (next) {
  //hash the password with cost at 12
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
//checks if the password is correct
UserSchema.methods.checkPassword = async function (password, userPassword) {
  return await bcrypt.compare(password, userPassword);
};

const User = mongoose.model("users", UserSchema);

module.exports = User;
