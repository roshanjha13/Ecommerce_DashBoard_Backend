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
    trim: true,
    lowercase: true,
    unique: true,
    match: [
      /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please provide a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password should be at least 6 characters long"],
    validate: {
      validator: function (v) {
        // Check for at least one lowercase letter, one uppercase letter, one number, and one unique character
        const lowercaseRegex = /[a-z]/;
        const uppercaseRegex = /[A-Z]/;
        const numberRegex = /\d/;
        const uniqueCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

        return (
          lowercaseRegex.test(v) &&
          uppercaseRegex.test(v) &&
          numberRegex.test(v) &&
          uniqueCharRegex.test(v)
        );
      },
      message:
        "Password should have at least one lowercase letter, one uppercase letter, one number, and one special character.",
    },
  },
});

const User = mongoose.model("Users", userSchema);
module.exports = User;
