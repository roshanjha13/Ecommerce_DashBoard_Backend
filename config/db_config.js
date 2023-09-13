const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `MONGODB CONNECTED AT :-> ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MONGODB DISCONNECTED".red.underline);
});

mongoose.connection.on("connected", () => {
  console.log("MONGODB CONNECTED".green.underline);
});

module.exports = connectDB;
