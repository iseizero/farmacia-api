/**
 * Controlador Farmacias
 * Date: 16-01-2020
 * Author: Mirko Gonzalez Vasquez
 * Version: v1.0.0
 */

const { Farmacia, listarFarmacias } = require('./farmacias.dao')

exports.obtenerComunas = (req, res) => {
    Farmacia.obtenerComunas()
    .then(_result => res.status(200).send(_result.comunas))
    .catch(_err => res.status(500).send({ message: _err.stack }));
    };

exports.obtenerFarmacias = (req, res) => {
    const {comuna, nombre_de_local} = req.body

    listarFarmacias(comuna, nombre_de_local)
    .then(_result => res.status(200).send(_result))
    .catch((_err) => res.status(500).send({ message: _err.stack}))
}
