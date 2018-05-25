/**
 * @description Rutas y métodos HTTP disponibles para asignar temas a materias
 * @author Yonifer Gallego
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Materia = require('../models/materia');
const Tema = require('../models/tema');

 /** 
 * @api {POST} /api/materias/asignarTema Asigna un tema a una materia
 * @apiName PostAsignarTemaMateria
 * @apiGroup Materia 
 * 
 * @apiParam {String} idMateria  El id de la materia
 * @apiParam {String} idTema El id del tema a asignar
 * 
 * @apiParamExample  {Object} Request-Example:
 *      {
 *          "idMateria": "",
 *          "idTema": ""
 *      }
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Json} message Mensaje indicando que se asignó el tema
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Mensaje indicando el error en la solicitud
 */
router.post('/', (req, res) => {
  Materia.findOne({ _id: req.body.idMateria }, (err, materia) => {
    if (err) return res.status(400).json({ message: err });
    
    Tema.findOne({ _id: req.body.idTema }, (err, tema) => {
      if (err) return res.status(400).json({ message: err });
      materia.temas.push(tema._id);
      materia.save();
      res.status(200).json({ message: 'Tema asignado a la materia '+materia.nombre });
    });
  });
});
module.exports = router;
