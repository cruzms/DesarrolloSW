/**
 * @description Rutas y métodos HTTP disponibles para el CRUD de grupos
 * @author Santiago Cruz
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Grupo = require('../models/grupo');

/** 
 * @api {GET} /api/grupos/:id Obtener un grupo con un id proporcionado
 * @apiName GetGrupoID
 * @apiGroup Grupo 
 * 
 * @apiParam  {String} id Id del grupo
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Grupo} grupo Grupo buscado
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si no se encuentra el grupo con el id solicitado
 */
router.get('/:id', (req, res) => {
    Grupo.findOne({ _id: req.params.id }, (err, grupo) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json(grupo);
    });
});

module.exports = router; 
