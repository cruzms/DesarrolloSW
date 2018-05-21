/**
 * @description Modelo materia
 * @author Santiago Cruz
 * @version 1.0
 */

const mongoose = require('mongoose');
const materiaSchema = mongoose.Schema({
    nombre: String
});

module.exports = mongoose.model('Materia', materiaSchema, 'Materias');
