/**
 * @description Rutas y métodos HTTP disponibles para consultar materias de profesores
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Profesor = require('../models/profesor');
const Materia = require('../models/materia');

/**
 * Consultar las materias que da un profesor
 * URL: /api/profesores/asignarMateria
 * Método HTTP: POST
 * @param {String} id - La cédula del profesor 
 * @returns {StatusCode} Código HTTP:200 y la lista de materias del profesor
 * o Código HTTP:400 y un mensaje indicando el error en la solicitud
 */
router.get('/:id', (req, res) => {
    materias: Materia[];
    Profesor.findOne({
        _id: req.params.id
    }, (err, profesor) => {
        if (err) return res.status(400).json({
            message: err
        });
        profesor.materias.forEach(idmateria => {
            Materia.findOne({
                _id: idmateria
            }, (err, materia) => {
                if (err) return res.status(400).json({
                    message: err
                });
                materias.push(materia);
            });
        });
        res.status(200).json(materias);
    });
});
module.exports = router;