const express = require('express')

const router = express.Router()

const farmacias_controller = require('./farmacias.controller')

const context = 'farmacias'

router.get(`/${context}/obtenerComunas/`, farmacias_controller.obtenerComunas)
router.post(`/${context}/obtenerFarmacias/`, farmacias_controller.obtenerFarmacias)

module.exports = router
