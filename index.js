const express = require("express");
require("dotenv").config();
const connectDb = require("./config/db_config");

const app = express();

connectDb();

app.get("/", (req, res) => {
  res.send("app is working..");
});

const port = process.env.PORT;
app.listen(5000);
