const mongoose = require('mongoose');

const cuentaSchema = mongoose.Schema({
    Numero_cuenta: String,
    Id_cliente: String,
    Saldo: Number,
    Tipo: String
});

module.exports = mongoose.model('Cuenta',cuentaSchema,'Cuentas');
