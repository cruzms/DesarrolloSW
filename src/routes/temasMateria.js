/**
 * @description Rutas y métodos HTTP disponibles para consultar temas de materias
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Materia = require('../models/materia');

/**
 * Consultar los temas que tiene una materia
 * URL: /api/materias/consultarTemas
 * Método HTTP: GET
 * @param {String} id - El id de la materia 
 * @returns {StatusCode} Código HTTP:200 y la lista de temas de la materia
 * o Código HTTP:400 y un mensaje indicando el error en la solicitud
 */
router.get('/:id', (req, res) => {
    Materia.findOne({
            _id: req.params.id
        })
        .populate('temas')
        .exec((err, materia) => {
            if (err) return res.status(400).json({
                message: err
            });
            res.status(200).json(materia.temas);
        });
});
module.exports = router;