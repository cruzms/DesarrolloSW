/**
 * @description Rutas y métodos HTTP disponibles para consultar temas de materias
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Materia = require('../models/materia');

/**
 * @api {GET} /api/materias/consultarTemas Consultar los temas que tiene una materia
 * @apiName GetMateriasProfesor
 * @apiGroup Profesor
 * 
 * @apiParam  {String} id El id de la materia 
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {temas[]} temas Lista de temas de la materia
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si ocurre un error en la solicitud
 */
router.get('/:id', (req, res) => {
    Materia.findOne({
            _id: req.params.id
        })
        .populate('temas')
        .exec((err, materia) => {
            if (err) return res.status(400).json({
                message: err
            });
            res.status(200).json(materia.temas);
        });
});
module.exports = router;
