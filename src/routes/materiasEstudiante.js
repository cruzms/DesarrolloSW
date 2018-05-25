/**
 * @description Rutas y métodos HTTP disponibles para consultar materias de estudiantes
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Estudiante = require('../models/estudiante');

/**
 * Consultar las materias de un estudiante
 * URL: /api/estudiantes/consultarMaterias
 * Método HTTP: GET
 * @param {String} id - El id del estudiante
 * @returns {StatusCode} Código HTTP:200 y la lista de materias del estudiante
 * o Código HTTP:400 y un mensaje indicando el error en la solicitud
 */
router.get('/:id', (req, res) => {
    Estudiante.findOne({
            _id: req.params.id
        })
        .populate('materias')
        .exec((err, estudiante) => {
            if (err) return res.status(400).json({
                message: err
            });
            res.status(200).json(estudiante.materias);
        });
});
module.exports = router;