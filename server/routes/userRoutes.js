const express = require("express");
const controller = require("../controllers/authController");
const userController = require("../controllers/userController");
const router = express.Router();

router.route("/login").post(controller.login);
router.route("/signup").post(controller.signup);
router.route("/entries/:id").get(userController.getEntries);

module.exports = router;
