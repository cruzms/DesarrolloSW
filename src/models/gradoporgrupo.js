/**
 * @description Modelo gradoporgrupo
 * @author Yonifer Gallego
 * @version 1.0
 */

const mongoose = require('mongoose');

const gradoporgrupoSchema = mongoose.Schema({
    nombre: String,
    grado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Grado'
    },
    grupo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Grupo'
    }
});

module.exports = mongoose.model('GradoporGrupo', gradoporgrupoSchema, 'GradosPorGrupos');