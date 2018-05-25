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
 * Asigna una materia a un profesor y guarda en la base de datos
 * URL: /api/profesores/asignarMateriaProfesor
 * Método HTTP: POST
 * @param {Number} idProfesor - La cédula del profesor 
 * @param {String} idMateria - El id de la materia a asignar
 * @returns {StatusCode} Código HTTP:200 un mensaje indicando que se asignó la materia
 * o Código HTTP:400 y un mensaje indicando el error en la solicitud
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
 * Asigna una materia a un estudiante y guarda en la base de datos
 * URL: /api/estudiantes/asignarMateriaEstudiante
 * Método HTTP: POST
 * @param {Number} idEstudiante - El id del estudiante 
 * @param {String} idMateria - El id de la materia a asignar
 * @returns {StatusCode} Código HTTP:200 un mensaje indicando que se asignó la materia
 * o Código HTTP:400 y un mensaje indicando el error en la solicitud
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
