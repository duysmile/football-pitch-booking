const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
  ownerId: String,
  name: String,
  city: String,
  district: String,
  address: String,
  yards: Array,
  parks: Number,
  drinks: Number,
  timeStart: String,
  timeEnd: String
});

const Fields = mongoose.model("Fields", fieldSchema, "fields");
module.exports = Fields;
