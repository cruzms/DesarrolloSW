/**
 * @description Rutas y métodos HTTP disponibles para consultar materias de estudiantes
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Estudiante = require('../models/estudiante');

 /**
 * @api {GET} /api/estudiantes/consultarMaterias Consultar las materias de un estudiante
 * @apiName GetMateriasEstudiante
 * @apiGroup Estudiante
 * 
 * @apiParam  {String} id El id del estudiante
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {materias[]} materias Lista de materias del estudiante
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si ocurre un error en la solicitud
 */
router.get('/:id', (req, res) => {
    Estudiante.findOne({
            _id: req.params.id
        })
        .populate('materias')
        .exec((err, estudiante) => {
            if (err) return res.status(400).json({
                message: err
            });
            res.status(200).json(estudiante.materias);
        });
});
module.exports = router;
