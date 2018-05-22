/**
 * @description Modelo materia
 * @author Santiago Cruz
 * @version 1.0
 */

const mongoose = require('mongoose');
const materiaSchema = mongoose.Schema({
    nombre: String,
    temas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tema'
    }]
});

module.exports = mongoose.model('Materia', materiaSchema, 'Materias');
