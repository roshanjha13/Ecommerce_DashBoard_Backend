const asyncHandler = require("express-async-handler");
const User = require("../models/usersModel");

exports.register = asyncHandler(async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

exports.login = asyncHandler(async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.json(user);
    } else {
      res.json({ result: "No user found" });
    }
  } else {
    res.json({ result: "No user found" });
  }
});
