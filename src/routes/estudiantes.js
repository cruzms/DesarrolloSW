/**
 * @description Rutas y métodos HTTP disponibles para el CRUD de estudiantes
 * @author Yonifer Gallego A
 * @version 1.0
 */

const router = require('express').Router();
const mongoose = require('mongoose');
const Estudiante = require('../models/estudiante');
const asignarMateria = require('./asignarMateria');
const asignarGrupo = require('./asignarGrupo');
const materiasEstudiante = require('./materiasEstudiante');
// const gruposProfesor = require('./gruposProfesor');

router.use('', asignarMateria);
router.use('', asignarGrupo);
router.use('/consultarMaterias', materiasEstudiante);
// router.use('/consultarGrupos', gruposProfesor);

/**
 * @api {GET} /api/estudiantes Obtener todos los estudiantes
 * @apiName GetEstudiante
 * @apiGroup Estudiante
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {estudiantes[]} estudiantes Lista de estudiantes
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si ocurre un error en la solicitud
 */
router.get('/', (req, res) => {
    Estudiante.find((err, estudiante) => {
        if (err) return res.status(400).json({
            message: err
        });
        res.status(200).json(estudiante);
    });
});

/** 
 * @api {GET} /api/estudiantes/:id Obtener un estudiante con un id proporcionado
 * @apiName GetEstudianteID
 * @apiGroup Estudiante 
 * 
 * @apiParam  {String} id Id del Estudiante
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Estudiante} estudiante Estudiante buscado
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si no se encuentra el estudiante con el id solicitado
 */
router.get('/:id', (req, res) => {
    Estudiante.findOne({
        _id: req.params.id
    }, (err, estudiante) => {
        if (err) return res.status(400).json({
            message: err
        });
        res.status(200).json(estudiante);
    });
});

/** 
 * @api {POST} /api/estudiantes Agregar un estudiante a la base de datos
 * @apiName PostEstudiante
 * @apiGroup Estudiante 
 * 
 * @apiParam {Estudiante} Estudiante El estudiante que se va a agregar al sistema
 * @apiParam {String} Estudiante.nombre - El nombre del estudiante 
 * @apiParam {String} Estudiante.apellido - El apellido del estudiante
 * 
 * @apiParamExample  {Estudiante} Request-Example:
 *      {
 *          "nombre": "Nombre",
 *          "apellido": "Apellido"
 *      }
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Json} message Mensaje indicando que se agregó el estudiante
 * @apiSuccess (200) {Json} object Estudiante agregado
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Mensaje indicando el error en la solicitud
 */
router.post('/', (req, res) => {
    let nuevoEstudiante = new Estudiante({
        nombre: req.body.nombre,
        apellido: req.body.apellido
    });

    nuevoEstudiante.save((err, nuevoEstudiante) => {
        if (err) {
            return res.status(400).json({
                message: err
            });
        }
        res.status(200).json({
            message: 'Estudiante agregado',
            object: nuevoEstudiante
        });
    });
});

module.exports = router;