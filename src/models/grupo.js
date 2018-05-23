/**
 * @description Modelo grupo
 * @author Santiago Cruz
 * @version 1.0
 */

const mongoose = require('mongoose');
const grupoSchema = mongoose.Schema({
  nombre: String
});

module.exports = mongoose.model('Grupo', grupoSchema, 'Grupos');
