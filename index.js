//required imports
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./model/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

//Post Something on the root of the website
app.get("/", (req, res) => {
  res.send("Hello From Node Api");
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
