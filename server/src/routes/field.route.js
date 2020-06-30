const router = require('express').Router();
const fieldController = require('../controllers/field.controller');

router.get('/api/fields', fieldController.getFields);

module.exports = router;
