const express = require("express");
const controller = require("../controllers/mealController");
const router = express.Router();

router.route("/:id").get(controller.getInsulin);
router.route("/:id").post(controller.addInsulin);
router.route("/:id").delete(controller.deleteInsulin);

module.exports = router;
