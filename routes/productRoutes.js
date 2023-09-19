const express = require("express");
const {
  addProduct,
  getProducts,
  deleteProduct,
  getSingleProduct,
} = require("../controllers/productController");

const router = express.Router();

router.route("/add-product").post(addProduct);
router.route("/get-products").get(getProducts);
router.route("/get-product/:id").get(getSingleProduct);
router.route("/delete-product/:id").delete(deleteProduct);

module.exports = router;
