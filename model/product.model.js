//ref to mongoose module
const mongoose = require("mongoose");
//our product class "Schema", and all the required INFO
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Product Name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    Image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
//this is for creating a collections of products in db
const Product = mongoose.model("Product", ProductSchema);
//using the exports keyword to make it available for import in other file
module.exports = Product;
