const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: Date.now,
  },
  exercises: [
  type: {
      type: String,
      trim: true,
      required: "Workout type is Required"
  },
  name: {
    type: String,
    trim: true,
    required: "Workout name is Required"
  },
  duration: {
    type: Number,
    trim: true,
    required: "Duration is Required"
  },
  weight: {
    type: Number,
    trim: true,
  },
  reps: {
    type: Number,
    trim: true,
  },
  sets: {
    type: Number,
    trim: true,
  },

],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
