 
const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario-controller');
const authService = require('../services/auth-service');

router.post('/', controller.post);
router.post('/login', controller.login);
router.post('/refresh-token', authService.authorize, controller.refreshToken);

router.post('/inserirMoeda', authService.authorize, controller.inserirMoeda);

module.exports = router;