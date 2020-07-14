const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const authValidation = require('../validations/auth.validation');

router.post('/api/register', authValidation.register, authController.register);
router.post('/api/login', authValidation.login, authController.login);

module.exports = router;
