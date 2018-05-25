/**
 * @description Modelo tema
 * @author Santiago Cruz
 * @version 1.0
 */

const mongoose = require('mongoose');
const temaSchema = mongoose.Schema({
    nombre: String
});

module.exports = mongoose.model('Tema', temaSchema, 'Temas');
