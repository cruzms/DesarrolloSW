/**
 * @description Rutas y métodos HTTP disponibles para el CRUD de materias
 * @author Santiago Cruz
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Materia = require('../models/materia');

/**
 * Obtener todos los materias
 * URL: /api/materias
 * Método HTTP: GET
 * @returns {StatusCode materias[]} - Código HTTP:200 y lista de materias
 * o Código HTTP:400 si ocurre un error en la solicitud
 */
router.get('/', (req, res) => {
    Materia.find((err, materias) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json(materias);
    });
});

/**
 * Obtener una materia con un id proporcionado
 * URL: /api/materias/:id
 * Método HTTP: GET
 * @param {String} id - Id de la materia
 * @returns {StatusCode materia} - Código HTTP:200 y objeto materia
 * o Código HTTP:400 si no se encuentra la materia con el id solicitado
 */
router.get('/:id', (req, res) => {
    Materia.findOne({ _id: req.params.id }, (err, materia) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json(materia);
    });
});

/**
 * Agregar una materia a la base de datos
 * URL: /api/materias
 * Método HTTP: POST
 * @param {Object} Materia - La materia que se va a agregar al sistema
 * @param {String} Materia.nombre - El nombre de la materia 
 * @returns {StatusCode} Código HTTP:200 un mensaje indicando que se agregó la materia 
 * o Código HTTP:400 y un mensaje indicando el error en la solicitud
 */
router.post('/', (req, res) => {
    let nuevaMateria = new Materia({
        nombre: req.body.nombre
    });

    nuevaMateria.save((err, nuevaMateria) => {
        if (err) {
            return res.status(400).json({ message: err });
        }
        res.status(200).json({ message: 'Materia agregada', object: nuevaMateria });
    });
});

module.exports = router; 
