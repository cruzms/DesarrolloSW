/**
 * @description Modelo actividad
 * @author Santiago Cruz
 * @version 1.0
 */

const mongoose = require('mongoose');
const actividadSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'Título es obligatorio']
    }, profesor: {
        type: mongoose.Schema.Types.Number,
        ref: 'Profesor',
    },
    integrantes: {
        type: Number,
        default: 1
    },
    descripcion: {
        type: String,
        required: [true, 'Descripción es obligatorio']
    },
    logros: {
        type: String
    },
    fechaLimite: {
        type: Date,
        required: [true, 'Fecha Límite es obligatorio']
    },
    gradoporgrupo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GradoporGrupo',
        required: [true, 'Grado es obligatorio']
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
    },
    archivos: [{
        _id: false,
        file: {
            type: mongoose.Schema.Types.String,
            ref: 'Archivo'
        },
        nombreOriginal: {
            type: String
        }
    }]
});

module.exports = mongoose.model('Actividad', actividadSchema, 'Actividades');