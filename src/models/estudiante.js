/**
 * @description Modelo estudiante
 * @author Yonifer Gallego
 * @version 1.0
 */

const mongoose = require('mongoose');

const estudianteSchema = mongoose.Schema({
    nombre: String,
    apellido: String,
    materias: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Materia'
    }],
    grupo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Grupo'
    }
});

module.exports = mongoose.model('Estudiante', estudianteSchema, 'Estudiantes');