const User = require("../models/userModel");
const Insulin = require("../models/insulinModel");

exports.getInsulin = async (req, res, next) => {
  try {
    const insulin = await User.findOne({ _id: req.params.id }).select("insulin");
    res.status(200).json({
      status: "success getting insulin",
      data: insulin.insulin,
    });
  } catch (err) {
    console.log("Diabetes App Error: ", err);
  }
};

exports.addInsulin = async (req, res, next) => {
  try {
    const newInsulin = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: { insulin: req.body.insulin },
      },
      { new: true }
    ).select("insulin");

    res.status(201).json({
      status: "success posting insulin",
      data: newInsulin,
    });
  } catch (err) {
    console.log("Diabetes App Error: ", err);
  }
};

exports.deleteInsulin = async (req,res,next) =>{
  
  try{
    const deleteInsulin = await User.updateOne({_id: req.params._id});
    console.log(deleteInsulin);
    res.status(200).json({
      status: "insulin deleted",
      data:deleteInsulin
    });
  } catch (err) {
    console.log("Diabetes App Error: ", err);
  }
};
