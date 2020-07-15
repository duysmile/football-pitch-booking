require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const fieldRoute = require("./routes/field.route");
var cors = require("cors");

mongoose.connect(process.env.MONGO_URL);
app.use(cors());

app.listen((req, res) => {
  console.log("App listening");
});

app.use("/field", fieldRoute);
