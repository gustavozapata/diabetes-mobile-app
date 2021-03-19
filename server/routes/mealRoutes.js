const express = require("express");
const controller = require("../controllers/mealController");
const router = express.Router();

router.route("/:id").get(controller.getMeals);
router.route("/:id").post(controller.addMeal);

module.exports = router;
