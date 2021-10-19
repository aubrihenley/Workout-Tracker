const router = require("express").Router();
const Workout = require("../../models/workout");
//const db = require("../../seeders/seed");

//route to get workout
router.get("/", async (req, res) => {
  try {
    const workouts = await Workout.aggregate([
      {
        $addFields: { totalDuration: { $sum: "$exercises.duration" } },
      },
    ]);
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to add to most recent workout
router.put("/:id", async ({ params, body }, res) => {
  console.log(body);
  try {
    const updateWorkout = await Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true }
    );
    res.json(updateWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create exercise
router.post("/", async ({ body }, res) => {
  try {
    const newWorkout = await Workout.create(body);
    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

//route to combine duration of last 7 workouts
router.get("/range", async (req, res) => {
  console.log(res, "get duration");
  try {
    const workouts = await Workout.aggregate([
      {
        $addFields: { totalDuration: { $sum: "$exercises.duration" } },
      },
    ]);
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
