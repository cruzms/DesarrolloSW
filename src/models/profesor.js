/**
 * @description Modelo profesor
 * @author Santiago Cruz
 * @version 1.0
 */

const mongoose = require('mongoose');

const profesorSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: [true, 'Cédula es obligatorio']
    },
    nombre: String,
    apellido: String,
    materias: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Materia'
    }]
});

module.exports = mongoose.model('Profesor', profesorSchema, 'Profesores');
