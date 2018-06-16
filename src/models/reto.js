/**
 * @description Modelo reto
 * @author Santiago Cruz
 * @version 1.0
 */

const mongoose = require('mongoose');
const retoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'Nombre es obligatorio']
  },
  preguntas: [{
    _id: false,
    pregunta: {
      type: String,
      required: [true, 'Pregunta es obligatoria']
    },
    imagen: {
      type: mongoose.Schema.Types.String
    },
    respuestas: [{
      _id: false,
      texto: String,
      correcta: Boolean,
      imagen: mongoose.Schema.Types.String
    }]
  }],
  gradoporgrupo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GradoporGrupo',
    required: [true, 'GradoporGrupo es obligatorio']
  },
  materia: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Materia',
    required: [true, 'Materia es obligatorio']
  },
  tema: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tema',
    required: [true, 'Tema es obligatorio']
  }
});

module.exports = mongoose.model('Reto', retoSchema, 'Retos');
