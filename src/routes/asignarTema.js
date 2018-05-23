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
 * Asigna un tema a una materia y guarda en la base de datos
 * URL: /api/materias/asignarTema
 * Método HTTP: POST
 * @param {Number} idMateria - El id de la materia 
 * @param {String} idTema - El id del tema a asignar
 * @returns {StatusCode} Código HTTP:200 un mensaje indicando que se asignó el tema
 * o Código HTTP:400 y un mensaje indicando el error en la solicitud
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