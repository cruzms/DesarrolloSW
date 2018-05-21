/**
 * @description Rutas y métodos HTTP disponibles para el CRUD de profesores
 * @author Santiago Cruz
 * @version 1.0
 */

const router = require('express').Router();
const mongoose = require('mongoose');
const Profesor = require('../models/profesor');
const materiaProfesor = require('./materiasPorProfesor');

router.use('/asignarMateria', materiaProfesor);

/**
 * Obtener todos los profesores
 * URL: /api/profesores
 * Método HTTP: GET
 * @returns {StatusCode profesores[]} - Código HTTP:200 y lista de profesores
 * o Código HTTP:400 si ocurre un error en la solicitud
 */
router.get('/', (req, res) => {
    Profesor.find((err, profesores) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json(profesores);
    });
});

/**
 * Obtener un profesor con un id proporcionado
 * URL: /api/profesores/:id
 * Método HTTP: GET
 * @param {String} id - Cédula del profesor buscado
 * @returns {StatusCode profesor} - Código HTTP:200 y objeto profesor
 * o Código HTTP:400 si no se encuentra el profesor con el id solicitado
 */
router.get('/:id', (req, res) => {
    Profesor.findOne({ _id: req.params.id }, (err, profesor) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json(profesor);
    });
});

/**
 * Agregar un profesor a la base de datos
 * URL: /api/profesores
 * Método HTTP: POST
 * @param {Object} Profesor - El profesor que se va a agregar al sistema
 * @param {Number} Profesor._id - La cédula del profesor 
 * @param {String} Profesor.nombre - El nombre del profesor 
 * @param {String} Profesor.apellido - El apellido del profesor
 * @returns {StatusCode} Código HTTP:200 un mensaje indicando que se agregó el profesor 
 * o Código HTTP:400 y un mensaje indicando el error en la solicitud
 */
router.post('/', (req, res) => {
    let nuevoProfesor = new Profesor({
        _id: req.body._id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        materias: req.body.materias
    });

    nuevoProfesor.save((err, nuevoProfesor) => {
        if (err) {
            return res.status(400).json({ message: err });
        }
        res.status(200).json({ message: 'Profesor agregado', object: nuevoProfesor });
    });
});

module.exports = router; 
