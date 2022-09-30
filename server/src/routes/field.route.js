const express = require("express");
const router = express.Router();
const field = require("../controllers/field.controller");

router.get("/", field.index);

module.exports = router;
