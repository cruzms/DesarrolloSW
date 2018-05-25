/**
 * @description Rutas y métodos HTTP disponibles para el CRUD de profesores
 * @author Santiago Cruz
 * @version 1.0
 */

const router = require('express').Router();
const mongoose = require('mongoose');
const Profesor = require('../models/profesor');
const asignarMateria = require('./asignarMateria');
const asignarGrupo = require('./asignarGrupo');
const materiasProfesor = require('./materiasProfesor');
const gruposProfesor = require('./gruposProfesor');

router.use('', asignarMateria);
router.use('', asignarGrupo);
router.use('/consultarMaterias', materiasProfesor);
router.use('/consultarGrupos', gruposProfesor);

/**
 * @api {GET} /api/profesores Obtener todas los profesores
 * @apiName GetProfesor
 * @apiGroup Profesor
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {profesores[]} profesores Lista de profesores
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si ocurre un error en la solicitud
 */
router.get('/', (req, res) => {
    Profesor.find((err, profesores) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json(profesores);
    });
});

 /** 
 * @api {GET} /api/profesores/:id Obtener un profesor con un id proporcionado
 * @apiName GetProfesorID
 * @apiGroup Profesor 
 * 
 * @apiParam  {String} id Id del profesor
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Profesor} profesor Profesor buscado
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si no se encuentra el profesor con el id solicitado
 */
router.get('/:id', (req, res) => {
    Profesor.findOne({ _id: req.params.id }, (err, profesor) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json(profesor);
    });
});

 /** 
 * @api {POST} /api/profesores Agregar un profesor a la base de datos
 * @apiName PostProfesor
 * @apiGroup Profesor 
 * 
 * @apiParam {Profesor} Profesor El profesor que se va a agregar al sistema
 * @apiParam {Number} Profesor._id - La cédula del profesor 
 * @apiParam {String} Profesor.nombre - El nombre del profesor 
 * @apiParam {String} Profesor.apellido - El apellido del profesor
 * 
 * @apiParamExample  {Profesor} Request-Example:
 *      {
 *          "_id": 1111,
 *          "nombre": "Nombre",
 *          "apellido": "Apellido"
 *      }
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Json} message Mensaje indicando que se agregó la profesor
 * @apiSuccess (200) {Json} object Profesor agregado
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Mensaje indicando el error en la solicitud
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
