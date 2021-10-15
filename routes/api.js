const router = require("express").Router();
const Workout = require("../models/workout.js");

//route to get last workout

//route to add to most recent workout

//route to combine weight from last 7 workouts

db.workouts.aggregate({
  $addFields: {
    totalWeight: { $sum: "$weight" },
  },
});
//route to combine duration of last 7 workouts

module.exports = router;
