/**
 * @description Rutas y métodos HTTP disponibles para el CRUD de materias
 * @author Santiago Cruz
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Materia = require('../models/materia');

/**
 * @api {GET} /api/materias Obtener todas las materias
 * @apiName GetMateria
 * @apiGroup Materia
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {materias[]} materias Lista de materias
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si ocurre un error en la solicitud
 */
router.get('/', (req, res) => {
    Materia.find((err, materias) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json(materias);
    });
});

/** 
 * @api {GET} /api/materias/:id Obtener una materia con un id proporcionado
 * @apiName GetMateriaID
 * @apiGroup Materia 
 * 
 * @apiParam  {String} id Id de la materia
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Materia} materia Materia buscada
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {StatusCode} message Si no se encuentra la materia con el id solicitado
 */
router.get('/:id', (req, res) => {
    Materia.findOne({ _id: req.params.id }, (err, materia) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json(materia);
    });
});

/**
 * 
 * @api {POST} /api/materias Agregar una materia a la base de datos
 * @apiName PostMateria
 * @apiGroup Materia 
 * 
 * @apiParam {Materia} Materia La materia que se va a agregar al sistema
 * @apiParam {String} Materia.nombre El nombre de la materia
 * 
 * @apiParamExample  {Materia} Request-Example:
 *      {
 *          "nombre":"Español"
 *      }
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Json} message Mensaje indicando que se agregó la materia
 * @apiSuccess (200) {Json} object Materia agregada
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Mensaje indicando el error en la solicitud
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
