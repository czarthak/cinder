const mongoose = require("mongoose");

const PathSchema = new mongoose.Schema(
  {
    start_long: {
      type: Number,
      required: true,
    },
    start_lat: {
      type: Number,
      required: true,
    },
    dest_long: {
        type: Number,
        required: true,
      },
    dest_lat: {
        type: Number,
        required: true,
    },
    time:
    {
        type: Number,
        required: true
    },
    day:
    {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Path", PathSchema);