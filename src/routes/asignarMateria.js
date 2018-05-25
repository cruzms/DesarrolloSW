/**
 * @description Rutas y métodos HTTP disponibles para asignar materias a profesores y estudiantes
 * @author Santiago Cruz
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Profesor = require('../models/profesor');
const Estudiante = require('../models/estudiante');
const Materia = require('../models/materia');

/** 
 * @api {POST} /api/profesores/asignarMateriaProfesor Asigna una materia a un profesor
 * @apiName PostAsignarMateriaProfesor
 * @apiGroup Asignar 
 * 
 * @apiParam {Number} idProfesor La cédula del profesor  
 * @apiParam {String} idMateria El id de la materia a asignar
 * 
 * @apiParamExample  {Object} Request-Example:
 *      {
 *          "idProfesor": "",
 *          "idMateria": ""
 *      }
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Json} message Mensaje indicando que se asignó la materia
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Mensaje indicando el error en la solicitud
 */
router.post('/asignarMateriaProfesor', (req, res) => {
  Profesor.findOne({ _id: req.body.idProfesor }, (err, profesor) => {
    if (err) return res.status(400).json({ message: err });
    
    Materia.findOne({ _id: req.body.idMateria }, (err, materia) => {
      if (err) return res.status(400).json({ message: err });
      profesor.materias.push(materia._id);
      profesor.save();
      res.status(200).json({ message: 'Materia asignada al profesor '+profesor.nombre });
    });
  });
});

/** 
 * @api {POST} /api/estudiantes/asignarMateriaEstudiante Asigna una materia a un estudiante
 * @apiName PostAsignarMateriaEstudiante
 * @apiGroup Asignar 
 * 
 * @apiParam {String} idEstudiante El id del estudiante  
 * @apiParam {String} idMateria El id de la materia a asignar
 * 
 * @apiParamExample  {Object} Request-Example:
 *      {
 *          "idEstudiante": "",
 *          "idMateria": ""
 *      }
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Json} message Mensaje indicando que se asignó la materia
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Mensaje indicando el error en la solicitud
 */
router.post('/asignarMateriaEstudiante', (req, res) => {
  Estudiante.findOne({ _id: req.body.idEstudiante }, (err, estudiante) => {
    if (err) return res.status(400).json({ message: err });
    
    Materia.findOne({ _id: req.body.idMateria }, (err, materia) => {
      if (err) return res.status(400).json({ message: err });
      estudiante.materias.push(materia._id);
      estudiante.save();
      res.status(200).json({ message: 'Materia asignada al estudiante '+estudiante.nombre });
    });
  });
});
module.exports = router;
