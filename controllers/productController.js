const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

exports.addProduct = asyncHandler(async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});
