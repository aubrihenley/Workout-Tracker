const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type is required",
      },
      name: {
        type: String,
        trim: true,
        required: "Name is required",
      },
      duration: {
        type: Number,
        trim: true,
        unique: true,
      },
      distance: {
        type: Number,
        trim: true,
        unique: true,
      },
      weight: {
        type: Number,
        trim: true,
        unique: true,
      },
      reps: {
        type: Number,
        trim: true,
        unique: true,
      },
      sets: {
        type: Number,
        trim: true,
        unique: true,
      },
    },
  ],
});

const workouts = mongoose.model("workouts", workoutSchema);

module.exports = workouts;
