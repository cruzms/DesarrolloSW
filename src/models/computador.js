const mongoose = require('mongoose');

const computadorSchema = mongoose.Schema({
    marca: {
        type: String,
        required: [true, 'Marca es obligatorio']
    },
    modelo: {
        type: String,
        required: [true, 'Modelo es obligatorio']
    },
    discoduro: Number,
    ram: Number,
    procesador: String,
    pulgadas: Number,
    disponible: Boolean
});

module.exports = mongoose.model('Computador', computadorSchema, 'Computadores');