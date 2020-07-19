const router = require('express').Router();
const yardController = require('../controllers/yard.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const yardValidation = require('../validations/yard.validation');

router.get('/api/fields/:field/yards', yardController.getYards);
router.post('/api/yards', [yardValidation.createYard, authMiddleware.validateToken], yardController.createYard);

module.exports = router;
