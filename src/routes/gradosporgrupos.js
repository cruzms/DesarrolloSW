/**
 * @description Rutas y métodos HTTP disponibles para el CRUD de gradosporgrupos
 * @author Yonifer Gallego
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const GradoporGrupo = require('../models/gradoporgrupo');
const Grupo = require('../models/grupo');
const Grado = require('../models/grado');

/**
 * @api {GET} /api/gradosporgrupos Obtener todos los gradosporgrupos
 * @apiName GetGradosporGrupo
 * @apiGroup GradoporGrupo
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {gradosporgrupo[]} gradosporgrupo Lista de gradosporgrupos
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si ocurre un error en la solicitud
 */
router.get('/', (req, res) => {
    GradoporGrupo.find((err, gradosporgrupo) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json(gradosporgrupo);
    });
});

/** 
 * @api {GET} /api/gradosporgrupos/:id Obtener un gradoporgrupo con un id proporcionado
 * @apiName GetGradosporGrupoID
 * @apiGroup GradoporGrupo 
 * 
 * @apiParam  {String} id Id del gradoporgrupo
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {GradoporGrupo} gradoporgrupo GradoporGrupo buscada
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si no se encuentra el gradoporgrupo con el id solicitado
 */
router.get('/:id', (req, res) => {
    GradoporGrupo.findOne({ _id: req.params.id }, (err, gradoporgrupo) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json(gradoporgrupo);
    });
});

/**
 * 
 * @api {POST} /api/gradosporgrupos Agregar un gradoporgrupo a la base de datos
 * @apiName PostGradoporGrupo
 * @apiGroup GradoporGrupo 
 * 
 * @apiParam {GradoporGrupo} GradoporGrupo El gradoporgrupo que se va a agregar al sistema
 * @apiParam {String} GradoporGrupo.grado El grado que conformará el gradoporgrupo
 * @apiParam {String} GradoporGrupo.grupo El grupo que conformará el gradoporgrupo
 * 
 * @apiParamExample  {GradoporGrupo} Request-Example:
 *      {
 *          "grado": "5b074186e33fae3a50d579f3",
 *          "grupo": "5b074186e33fae3a50d579d6"
 *      }
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Json} message Mensaje indicando que se agregó el gradoporgrupo
 * @apiSuccess (200) {Json} object GradoporGrupo agregado
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Mensaje indicando el error en la solicitud
 */
router.post('/', (req, res) => {
    Grado.findOne({ _id: req.body.grado }, (err, grado) => {
        if (err) return res.status(400).json({ message: err });        
        Grupo.findOne({ _id: req.body.grupo }, (err, grupo) => {
            if (err) return res.status(400).json({ message: err });
            let nuevoGradoporGrupo = new GradoporGrupo({
                nombre: grado.nombre + ' ' +grupo.nombre,
                grado: req.body.grado,
                grupo: req.body.grupo
            });
            nuevoGradoporGrupo.save((err, nuevoGradoporGrupo) => {
                if (err) {
                    return res.status(400).json({ message: err });
                }
                res.status(200).json({ message: 'GradoporGrupo agregado', object: nuevoGradoporGrupo });
            });
        });
    });    
});

module.exports = router; 
