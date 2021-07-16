const Fields = require("../models/field.model");

module.exports.index = async (req, res) => {
  const fields = await Fields.find();
  res.json(fields);
};