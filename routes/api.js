const router = require("express").Router();
const Workout = require("../models/workout.js");

//route to get last workout
router.get("/:id", (req, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//route to add to most recent workout

//route to combine weight from last 7 workouts

//route to combine duration of last 7 workouts

module.exports = router;
