const router = require('express').Router();
const mongoose = require('mongoose');
const Cuenta = require('../models/cuenta');

router.get('/', (req, res) => {
    Cuenta.find((err,cuentas) => {
        if(err) return res.json({message:err});
        res.json(cuentas);
    });
});

router.get('/:id',(req, res) => {
    Cuenta.findOne({_id: req.params.id }, (err, cuenta) => {
        if(err) return res.json({message:err});
        res.json(cuenta);
    });
});

router.post('/' ,(req,res) => {
    let nuevaCuenta = new Cuenta({
        numero_cuenta: req.body.numero_cuenta,
        id_cliente: req.body.id_cliente,
        saldo: req.body.saldo,
        tipo : req.body.tipo
    });
    nuevaCuenta.save((err,nuevaCuenta) => {
        if(err) {
            return res.json({ codigo: err});
        }
        res.json(nuevaCuenta);
    });
});

router.delete('/:id', (req, res) =>{
    Cuenta.remove({_id: req.params.id }, (err) => {
        if(err) return res.json({Message: err});
        res.json({Message: 'Cuenta Eliminada'});
    });
});

router.put('/:id', (req, res) =>{
    Cuenta.update({_id: req.params.id} , req.body, (err,raw) => {
        if(err) return res.json({Message: err});
        res.json({ Message: 'Cuenta modificada'});
    });
});

module.exports = router;