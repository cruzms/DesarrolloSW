const mongoose = require('mongoose');

const cuentaSchema = mongoose.Schema({
    numero_cuenta: String,
    id_cliente: String,
    saldo: Number,
    tipo: String
});

module.exports = mongoose.model('Cuenta',cuentaSchema,'Cuentas');
