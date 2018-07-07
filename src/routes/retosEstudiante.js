/**
 * @description Rutas y métodos HTTP disponibles para consultar retos de estudiantes
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Reto = require('../models/reto');

/**
 * @api {GET} /api/retos/consultarRetosEstudiante Consultar los retos de un estudiante
 * @apiName GetRetosEstudiante
 * @apiGroup Retos
 * 
 * @apiParam  {String} gradoporgrupo El gradoporgrupo del estudiante
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {retos[]} retos Lista de retos del estudiante
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si ocurre un error en la solicitud
 */
router.get('/:gradoporgrupo', (req, res) => {
    Reto.find({
        gradosporgrupos: {
            "$in": [req.params.gradoporgrupo]
        }
    }, (err, retos) => {
        if (err) return res.status(400).json({
            message: err
        });
        res.status(200).json(retos);
    });
});
module.exports = router;