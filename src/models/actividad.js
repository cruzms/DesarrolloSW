/**
 * @description Modelo actividad
 * @author Santiago Cruz
 * @version 1.0
 */

const mongoose = require('mongoose');
const materiaSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'Título es obligatorio']
    },
    integrantes: {
        type: Number,
        default: 1
    },
    descripcion: {
        type: String,
        required: [true, 'Descripcion es obligatorio']
    },
    objetivos: {
        type: String,
        required: [true, 'Objetivos es obligatorio']
    },
    fechaLimite: {
        type: Date,
        required: [true, 'Fecha Límite es obligatorio']
    },
    grupo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Grupo',
        required: [true, 'Grupo es obligatorio']
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Archivo'
    }]
});

module.exports = mongoose.model('Actividad', materiaSchema, 'Actividades');