const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: true,
  },
  exercises: {
    type: String,
  },
});

const Library = mongoose.model("Library", LibrarySchema);

module.exports = Library;
