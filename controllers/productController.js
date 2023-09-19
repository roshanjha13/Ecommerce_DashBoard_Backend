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

exports.deleteProduct = asyncHandler(async (req, res) => {
  let products = await Product.find();
  if (products.length === 0) {
    res.send({ result: "product not exist" });
  }
  products = await Product.deleteOne({ _id: req.params.id });
  res.json({
    messgae: "product deleted successfully",
    products,
  });
});

exports.getSingleProduct = asyncHandler(async (req, res) => {
  let product = await Product.findOne({ _id: req.params.id });
  if (!product) {
    res.json({ messgae: "product not found" });
  } else {
    res.json(product);
  }
});

exports.updateProduct = asyncHandler(async (req, res) => {
  let product = await Product.find();
  if (product.length === 0) {
    res.send({ result: "product not exist" });
  }

  product = await Product.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.json(product);
});
