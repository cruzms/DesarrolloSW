/**
 * @description Rutas y métodos HTTP disponibles para el CRUD de actividades
 * @author Santiago Cruz
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Actividad = require('../models/actividad');

/**
 * @api {GET} /api/actividades Obtener todas las actividades
 * @apiName GetActividad
 * @apiGroup Actividad
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {actividades[]} actividades Lista de actividades
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si ocurre un error en la solicitud
 */
router.get('/', (req, res) => {
    Actividad.find((err, actividades) => {
        if (err) return res.status(400).json({
            message: err
        });
        res.status(200).json(actividades);
    });
});

/** 
 * @api {GET} /api/actividades/:id Obtener una actividad con un id proporcionado
 * @apiName GetActividadID
 * @apiGroup Actividad 
 * 
 * @apiParam  {String} id Id de la actividad
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Actividad} actividad Actividad buscada
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si no se encuentra la actividad con el id solicitado
 */
router.get('/:id', (req, res) => {
    Actividad.findOne({
        _id: req.params.id
    }, (err, actividad) => {
        if (err) return res.status(400).json({
            message: err
        });
        res.status(200).json(actividad);
    });
});

/** 
 * @api {GET} /api/actividades/consultarActividades/:id/:id2 Obtener las actividades 
 * con un id de materia y grupos proporcionados
 * @apiName consultarActividades
 * @apiGroup Actividad 
 * 
 * @apiParam  {String} id Id de la materia
 * @apiParam  {String} id2 Id del grupo
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Actividad[]} actividades Actividades encontradas
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si no se encuentran actividades con los id ingresados
 */
router.get('/consultarActividades/:id/:id2', (req, res) => {
    Actividad.find({
        gradoporgrupo: req.params.id,
        materia: req.params.id2
    }, (err, actividades) => {
        if (err) return res.status(400).json({
            message: err
        });
        res.status(200).json(actividades);
    });
});

/**
 * 
 * @api {POST} /api/actividades Agregar una actividad a la base de datos
 * @apiName PostActividad
 * @apiGroup Actividad 
 * 
 * @apiParam {Actividad} Actividad La actividad que se va a agregar al sistema
 * @apiParam {String} Actividad.nombre El nombre de la actividad
 * 
 * @apiParamExample  {Actividad} Request-Example:
 *      {
 *          "titulo":"Español",
 *          "integrantes": 1,
 *          "descripcion": "Texto",
 *          "objetivos": "Texto",
 *          "fechaLimite": "01/4/2016",
 *          "gradoporgrupo": "ID grupo",
 *          "materia": "ID materia",
 *          "tema": "ID tema",
 *          "archivos": ["ID 1", "ID 1"]
 *      }
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Json} message Mensaje indicando que se agregó la actividad
 * @apiSuccess (200) {Json} object Actividad agregada
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Mensaje indicando el error en la solicitud
 */
router.post('/', (req, res) => {

    Actividad.findOne({
        profesor: req.body.profesor,
        titulo: req.body.titulo
    }, (err, actividad) => {
        if (err) return res.status(400).json({
            message: err
        });

        if (actividad == undefined) {
            let nuevaActividad = new Actividad({
                titulo: req.body.titulo,
                integrantes: req.body.integrantes,
                descripcion: req.body.descripcion,
                logros: req.body.logros,
                fechaLimite: req.body.fechaLimite,
                gradoporgrupo: req.body.gradoporgrupo,
                materia: req.body.materia,
                tema: req.body.tema,
                archivos: req.body.archivos,
                profesor: req.body.profesor
            });

            nuevaActividad.save((err, nuevaActividad) => {
                if (err) {
                    return res.status(400).json({
                        message: err
                    });
                }
                res.status(200).json({
                    message: 'Actividad agregada',
                    object: nuevaActividad
                });
            });
        } else {
            return res.status(400).json({
                message: 'El título de la actividad ya existe'
            });
        }
    });
});

/**
 * @api {Delete} /api/actividades/id Elmininar actividades
 * @apiName DeleteActividades
 * @apiGroup Actividad
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Json} Mensaje de eliminado
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si ocurre un error en la solicitud
 */
router.delete('/:id', (req, res) => {
    Actividad.remove({
        _id: req.params.id
    }, (err, actividades) => {
        if (err) return res.status(400).json({
            message: err
        });
        res.status(200).json({
            message: 'Actividad eliminada'
        });
    });
});

module.exports = router;