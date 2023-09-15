const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

exports.addProduct = asyncHandler(async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});

exports.getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  if (products.length === 0) {
    res.send({ result: "product not exist" });
  }
  res.send(products);
});
