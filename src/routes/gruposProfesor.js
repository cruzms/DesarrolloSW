/**
 * @description Rutas y métodos HTTP disponibles para consultar grupos de profesores
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Profesor = require('../models/profesor');

/**
 * @api {GET} /api/profesores/consultarGrupos Consultar los grupos que tiene un profesor
 * @apiName GetGruposProfesor
 * @apiGroup Profesor
 * 
 * @apiParam  {Number} id La cédula del profesor 
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {grupos[]} grupos Lista de grupos del profesor
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si ocurre un error en la solicitud
 */
router.get('/:id', (req, res) => {
    Profesor.findOne({
            _id: req.params.id
        })
        .populate('gradosporgrupos')
        .exec((err, profesor) => {
            if (err) return res.status(400).json({
                message: err
            });
            res.status(200).json(profesor.gradosporgrupos);
        });
});
module.exports = router;
