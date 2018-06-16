/**
 * @description Rutas y métodos HTTP disponibles para el CRUD de grados
 * @author Yonifer Gallego
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Grado = require('../models/grado');

/**
 * 
 * @api {POST} /api/grados Agregar un grado a la base de datos
 * @apiName PostGrado
 * @apiGroup Grado 
 * 
 * @apiParam {Grado} Grado El grado que se va a agregar al sistema
 * @apiParam {String} Grado.nombre El nombre del grado
 * 
 * @apiParamExample  {Grado} Request-Example:
 *      {
 *          "nombre": "Sexto"
 *      }
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Json} message Mensaje indicando que se agregó el grado
 * @apiSuccess (200) {Json} object Grado agregado
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Mensaje indicando el error en la solicitud
 */
router.post('/', (req, res) => {
    let nuevoGrado = new Grado({
        nombre: req.body.nombre
    });

    nuevoGrado.save((err, nuevoGrado) => {
        if (err) {
            return res.status(400).json({ message: err });
        }
        res.status(200).json({ message: 'Grado agregado', object: nuevoGrado });
    });
});

/** 
 * @api {GET} /api/grados/:id Obtener un grado con un id proporcionado
 * @apiName GetGradoID
 * @apiGroup Grado 
 * 
 * @apiParam  {String} id Id del grado
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Grado} grado Grado buscado
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si no se encuentra el grado con el id solicitado
 */
router.get('/:id', (req, res) => {
    Grado.findOne({ _id: req.params.id }, (err, grado) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json(grado);
    });
});

module.exports = router; 