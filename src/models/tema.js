/**
 * @description Modelo tema
 * @author Santiago Cruz
 * @version 1.0
 */

const mongoose = require('mongoose');
const temaSchema = mongoose.Schema({
    nombre: String,
    materia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Materia'
    },
    grado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Grado'
    }
});

module.exports = mongoose.model('Tema', temaSchema, 'Temas');
