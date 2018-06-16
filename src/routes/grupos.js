/**
 * @description Rutas y métodos HTTP disponibles para el CRUD de grupos
 * @author Santiago Cruz
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Grupo = require('../models/grupo');

/**
 * 
 * @api {POST} /api/grupos Agregar un grupo a la base de datos
 * @apiName PostGrupo
 * @apiGroup Grupo 
 * 
 * @apiParam {Grupo} Grupo El grupo que se va a agregar al sistema
 * @apiParam {String} Grupo.nombre El nombre del grupo
 * 
 * @apiParamExample  {Grupo} Request-Example:
 *      {
 *          "nombre": "B"
 *      }
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Json} message Mensaje indicando que se agregó el grupo
 * @apiSuccess (200) {Json} object Grupo agregado
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Mensaje indicando el error en la solicitud
 */
router.post('/', (req, res) => {
    let nuevoGrupo = new Grupo({
        nombre: req.body.nombre
    });

    nuevoGrupo.save((err, nuevoGrupo) => {
        if (err) {
            return res.status(400).json({ message: err });
        }
        res.status(200).json({ message: 'Grupo agregado', object: nuevoGrupo });
    });
});

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
