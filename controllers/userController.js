const asyncHandler = require("express-async-handler");
const User = require("../models/usersModel");
exports.register = asyncHandler(async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});
