//required imports
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require('dotenv').config();
const { errorHandler } = require('./middleware/error.middleware.js');
const mongoose = require("mongoose");
const Product = require("./model/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/api/products", productRoute);

//Post Something on the root of the website
app.get("/", (req, res) => {
  res.send("Hello From Node Api");
});

app.use(errorHandler);

/*
 *connection to MongooseDB
 */
mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() => {
    console.log("Connected To Local Database");
    app.listen(process.env.PORT, () => {
      console.log("Server is Running on 3000 Port");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
