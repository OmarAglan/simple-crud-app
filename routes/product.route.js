const express = require("express");
const product = require("../model/product.model.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

//Get All Products
router.get("/", getProducts);
//Get One Product
router.get("/:id", getProduct);

//Create One Product
router.post("/", createProduct);

//Update One Product
router.put("/:id", updateProduct);

//Delete One Product
router.delete("/:id", deleteProduct);

module.exports = router;
