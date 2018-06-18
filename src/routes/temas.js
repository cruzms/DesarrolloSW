/**
 * @description Rutas y métodos HTTP disponibles para el CRUD de temas
 * @author Santiago Cruz
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Tema = require('../models/tema');

/**
 * 
 * @api {POST} /api/temas Agregar un tema a la base de datos
 * @apiName PostTema
 * @apiGroup Tema 
 * 
 * @apiParam {Tema} Tema El tema que se va a agregar al sistema
 * @apiParam {String} Tema.nombre El nombre del tema
 * 
 * @apiParamExample  {Tema} Request-Example:
 *      {
 *          "nombre": "Leyes de los exponentes"
 *      }
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Json} message Mensaje indicando que se agregó el tema
 * @apiSuccess (200) {Json} object Tema agregado
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Mensaje indicando el error en la solicitud
 */
router.post('/', (req, res) => {
    let nuevoTema = new Tema({
        nombre: req.body.nombre
    });

    nuevoTema.save((err, nuevoTema) => {
        if (err) {
            return res.status(400).json({ message: err });
        }
        res.status(200).json({ message: 'Tema agregado', object: nuevoTema });
    });
});

/** 
 * @api {GET} /api/temas/:id Obtener un tema con un id proporcionado
 * @apiName GetTemaID
 * @apiGroup Tema 
 * 
 * @apiParam  {String} id Id del tema
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Tema} tema Tema buscado
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si no se encuentra el tema con el id solicitado
 */
router.get('/:id', (req, res) => {
    Tema.findOne({ _id: req.params.id }, (err, tema) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json(tema);
    });
});

/** 
 * @api {GET} /api/temas/:materia/:grado Obtener los temas de un grado y una materia
 * @apiName GetTemas
 * @apiGroup Tema 
 * 
 * @apiParam {String} materia Id de la materia
 * @apiParam {String} grado Id del grupo
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Tema[]} temas Lista de temas
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si no se encuentran temas
 */
router.get('/:materia/:grado', (req, res) => {
    Tema.find({ materia: req.params.materia, grado: req.params.grado }, (err, temas) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json(temas);
    });
});
module.exports = router; 
