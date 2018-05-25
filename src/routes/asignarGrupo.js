/**
 * @description Rutas y métodos HTTP disponibles para asignar grupos a profesores y estudiantes
 * @author Yonifer Gallego
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Profesor = require('../models/profesor');
const Estudiante = require('../models/estudiante');
const Grupo = require('../models/grupo');

 /** 
 * @api {POST} /api/profesores/asignarGrupoProfesor Asigna un grupo a un profesor
 * @apiName PostAsignarGrupoProfesor
 * @apiGroup Asignar 
 * 
 * @apiParam {Number} idProfesor La cédula del profesor 
 * @apiParam {String} idGrupo El id del grupo a asignar
 * 
 * @apiParamExample  {Object} Request-Example:
 *      {
 *          "idProfesor": 1053,
 *          "idGrupo": ""
 *      }
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Json} message Mensaje indicando que se asignó el grupo
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Mensaje indicando el error en la solicitud
 */
router.post('/asignarGrupoProfesor', (req, res) => {
  Profesor.findOne({ _id: req.body.idProfesor }, (err, profesor) => {
    if (err) return res.status(400).json({ message: err });
    
    Grupo.findOne({ _id: req.body.idGrupo }, (err, grupo) => {
      if (err) return res.status(400).json({ message: err });
      profesor.grupos.push(grupo._id);
      profesor.save();
      res.status(200).json({ message: 'Grupo asignado al profesor '+profesor.nombre });
    });
  });
});

/** 
 * @api {POST} /api/estudiantes/asignarGrupoEstudiante Asigna un grupo a un estudiante
 * @apiName PostAsignarGrupoEstudiante
 * @apiGroup Asignar 
 * 
 * @apiParam {String} idEstudiante El id del estudiante  
 * @apiParam {String} idGrupo El id del grupo a asignar
 * 
 * @apiParamExample  {Object} Request-Example:
 *      {
 *          "idEstudiante": "",
 *          "idGrupo": ""
 *      }
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Json} message Mensaje indicando que se asignó el grupo
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Mensaje indicando el error en la solicitud
 */
router.post('/asignarGrupoEstudiante', (req, res) => {
  Estudiante.findOne({ _id: req.body.idEstudiante }, (err, estudiante) => {
    if (err) return res.status(400).json({ message: err });
    
    Grupo.findOne({ _id: req.body.idGrupo }, (err, grupo) => {
      if (err) return res.status(400).json({ message: err });
      estudiante.grupo = grupo._id;
      estudiante.save();
      res.status(200).json({ message: 'Grupo asignado al estudiante '+estudiante.nombre });
    });
  });
});
module.exports = router;
