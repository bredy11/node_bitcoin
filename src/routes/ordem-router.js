const express = require('express');
const router = express.Router();
const controller = require('../controllers/ordem-controller');
const authService = require('../services/auth-service');

router.get('/', authService.authorize, controller.getValorAtual);
 
router.get('/:minutos', authService.authorize, controller.getPeriodo);
router.post('/', authService.authorize, controller.post);

module.exports = router;