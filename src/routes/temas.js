/**
 * @description Rutas y métodos HTTP disponibles para el CRUD de temas
 * @author Santiago Cruz
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Tema = require('../models/tema');

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

module.exports = router; 
