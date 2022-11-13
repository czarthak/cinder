const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {

    fname: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    lname: {
      type: String, 
      require: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    city: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);