const express = require('express');
const router = express.Router();

const farmacias_controller = require('./farmacias.controller');

const context = "farmacias";

router.post(`/${context}/obtenerComunas`, farmacias_controller.obtenerComunas);

module.exports = router;

