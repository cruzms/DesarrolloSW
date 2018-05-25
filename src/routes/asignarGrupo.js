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
 * Asigna un grupo a un profesor y guarda en la base de datos
 * URL: /api/profesores/asignarGrupoProfesor
 * Método HTTP: POST
 * @param {Number} idProfesor - La cédula del profesor 
 * @param {String} idGrupo - El id de la grupo a asignar
 * @returns {StatusCode} Código HTTP:200 un mensaje indicando que se asignó el grupo
 * o Código HTTP:400 y un mensaje indicando el error en la solicitud
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
 * Asigna un grupo a un estudiante y guarda en la base de datos
 * URL: /api/estudiantes/asignarGrupoEstudiante
 * Método HTTP: POST
 * @param {Number} idEstudiante - El id del estudiante 
 * @param {String} idGrupo - El id de la grupo a asignar
 * @returns {StatusCode} Código HTTP:200 un mensaje indicando que se asignó el grupo
 * o Código HTTP:400 y un mensaje indicando el error en la solicitud
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
