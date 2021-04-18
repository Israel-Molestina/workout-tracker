const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        required: 'Enter type of workout',
      },
      name: {
        type: String,
        reuired: 'Enter Name',
      },
      duration: {
        type: Number,
        required: 'Enter number',
      },
      distance: Number,
      weight: Number,
      sets: Number,
      reps: Number,
    },
  ],
  day: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
