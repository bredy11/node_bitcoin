const express = require('express');
const router = express.Router();
const controller = require('../controllers/poloniex-controller');
const authService = require('../services/auth-service');

router.getValorAtual('/', authService.authorize, controller.getValorAtual);
router.post('/', authService.authorize, controller.post);

module.exports = router;