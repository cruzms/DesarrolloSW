/**
 * @description Rutas y métodos HTTP disponibles para el CRUD de retos
 * @author Santiago Cruz
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Reto = require('../models/reto');

/**
 * @api {GET} /api/retos Obtener todas los retos
 * @apiName GetReto
 * @apiGroup Reto
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {retos[]} retos Lista de retos
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si ocurre un error en la solicitud
 */
router.get('/', (req, res) => {
  Reto.find((err, retos) => {
    if (err) return res.status(400).json({
      message: err
    });
    res.status(200).json(retos);
  });
});

/** 
 * @api {POST} /api/retos Agregar un reto a la base de datos
 * @apiName PostReto
 * @apiGroup Reto 
 * 
 * @apiParam {Reto} Reto La reto que se va a agregar al sistema
 * @apiParam {String} Reto.nombre El nombre del reto
 * 
 * @apiParamExample  {Reto} Request-Example:
 * 
      {
        "nombre": "Quiz Nro 1",
        "preguntas": [
          {
            "pregunta":"Pregunta?",
            "imagen":"ID",
            "respuestas":[
              {
                "texto":"respuesta 1",
                "correcta": false,
                "imagen":""
              },
              {
                "texto":"respuesta 2",
                "correcta": true,
                "imagen":""
              }
            ]
          }
        ],
        "gradosporgrupos": "ID",
        "materia": "ID",
        "tema": "ID"        
      }
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Json} message Mensaje indicando que se agregó el reto
 * @apiSuccess (200) {Json} object Reto agregado
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Mensaje indicando el error en la solicitud
 */
router.post('/', (req, res) => {
  let nuevoReto = new Reto({
    nombre: req.body.nombre,
    preguntas: req.body.preguntas,
    gradosporgrupos: req.body.gradosporgrupos,
    materia: req.body.materia,
    tema: req.body.tema,
    profesor: req.body.profesor,
    publicado: req.body.publicado
  });

  nuevoReto.save((err, nuevoReto) => {
    if (err) {
      return res.status(400).json({
        message: err
      });
    }
    res.status(200).json({
      message: 'Reto agregado',
      object: nuevoReto
    });
  });
});

module.exports = router;
