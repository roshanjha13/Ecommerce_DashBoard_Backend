const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Remove leading and trailing spaces
    minlength: [5, "Name should be at least 5 characters long"],
    maxlength: [45, "Name should be at most 45 characters long"],
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password should be at least 6 characters long"],
  },
});

const User = mongoose.model("Users", userSchema);
module.exports = User;
