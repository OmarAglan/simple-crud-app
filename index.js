const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Product = require("./model/product.model.js");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From Node Api Updated");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://Admin:1234567891@cluster0.9vnirob.mongodb.net/Node-Api?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected To Data Base");
    app.listen(3000, () => {
      console.log("Server is Running on 3000 Port");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
