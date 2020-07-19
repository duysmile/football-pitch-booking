const router = require('express').Router();
const fieldController = require('../controllers/field.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const fieldValidation = require('../validations/field.validation');

router.get('/api/fields', fieldController.getFields);
router.post('/api/fields', [fieldValidation.createField, authMiddleware.validateToken], fieldController.createField);

module.exports = router;
