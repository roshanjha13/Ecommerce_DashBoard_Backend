const express = require("express");
const { register } = require("../controllers/userController");
const { model } = require("mongoose");

const router = express.Router();

router.route("/register").post(register);

module.exports = router;
