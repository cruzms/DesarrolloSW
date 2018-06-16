/**
 * @description Modelo grado
 * @author Yonifer Gallego
 * @version 1.0
 */

const mongoose = require('mongoose');
const gradoSchema = mongoose.Schema({
  nombre: String
});

module.exports = mongoose.model('Grado', gradoSchema, 'Grados');