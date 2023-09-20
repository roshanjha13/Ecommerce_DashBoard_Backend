const asyncHandler = require("express-async-handler");
const User = require("../models/usersModel");
const Jwt = require("jsonwebtoken");
const jwtKey = "e-comm";

exports.register = asyncHandler(async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  Jwt.sign({ result }, jwtKey, { expiresIn: "24h" }, (err, token) => {
    if (err) {
      res.send({
        result: "something went wrong,Please try after sometimes",
      });
    }
    res.send({ result, auth: token });
  });
});

exports.login = asyncHandler(async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({ user }, jwtKey, { expiresIn: "24h" }, (err, token) => {
        if (err) {
          res.send({
            result: "something went wrong,Please try after sometimes",
          });
        }
        res.send({ user, auth: token });
      });
    } else {
      res.json({ result: "No user found" });
    }
  } else {
    res.json({ result: "No user found" });
  }
});
