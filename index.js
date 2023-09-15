const express = require("express");
require("dotenv").config();
const connectDb = require("./config/db_config");
const cors = require("cors");
const app = express();

const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");

connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.use("/product", productRouter);

app.get("/", (req, res) => {
  res.send("app is working..");
});

const port = process.env.PORT;
app.listen(port);
