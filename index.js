const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("app is working..");
});

const port = process.env.PORT;
app.listen(5000);
