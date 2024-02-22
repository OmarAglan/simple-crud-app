//Use Express.js
const express = require("express");
//Use MongooseDB
const mongoose = require("mongoose");
//Reference To the Product Model Schema
const Product = require("./model/product.model.js");
const app = express();

//Use Json Express Ext to form POST Data As json
app.use(express.json());
//this part is used for posting something on main page of the web service
//as you can see this "/" is the root of service
//we use GET and send "res" as string to display
app.get("/", (req, res) => {
  res.send("Hello From Node Api Updated");
});
//Get All Data From Database
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/api/products/:id", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Using Post From Url "/api/products" To add New Products
//to the database online, see product.model.js
//this is part Of All CRUD Api
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
/*
 *connection to MongooseDB
 */
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
