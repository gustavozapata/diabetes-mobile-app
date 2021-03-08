const express = require("express");
const controller = require("../controllers/authController");
const router = express.Router();

router.route("/login").post(controller.login);
router.route("/signup").post(controller.signup);

module.exports = router;
