const mongoose = require('mongoose');

const computadorSchema = mongoose.Schema({
    marca: String,
    modelo: String,
    discoduro: Number,
    ram: Number,
    procesador: String,
    pulgadas: Number,
    disponible: Boolean
});

module.exports = mongoose.model('Computador', computadorSchema, 'Computadores');