/**
 * @description Rutas y métodos HTTP disponibles para consultar grupos de profesores
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Profesor = require('../models/profesor');

/**
 * Consultar los grupos que tiene un profesor
 * URL: /api/profesores/consultarGrupos
 * Método HTTP: GET
 * @param {String} id - La cédula del profesor 
 * @returns {StatusCode} Código HTTP:200 y la lista de grupos del profesor
 * o Código HTTP:400 y un mensaje indicando el error en la solicitud
 */
router.get('/:id', (req, res) => {
    Profesor.findOne({
            _id: req.params.id
        })
        .populate('grupos')
        .exec((err, profesor) => {
            if (err) return res.status(400).json({
                message: err
            });
            res.status(200).json(profesor.grupos);
        });
});
module.exports = router;