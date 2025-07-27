const express = require("express");
const product = require("../model/product.model.js");
const router = express.Router();
const { protect } = require("../middleware/auth.middleware.js");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

//Get All Products
router.get("/", protect, getProducts);
//Get One Product
router.get("/:id", protect, getProduct);

//Create One Product
router.post("/", protect, createProduct);

//Update One Product
router.put("/:id", protect, updateProduct);

//Delete One Product
router.delete("/:id", protect, deleteProduct);

module.exports = router;
