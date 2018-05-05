/**
 * @description Modelo carro
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

const mongoose = require('mongoose');
const carroSchema = mongoose.Schema({
    marca: String,
    modelo: String,
    color: String,
    placa: String,
    puertas: Number,
    peso: Number,
    ano: Number
});

module.exports = mongoose.model('Carro', carroSchema, 'Carros');