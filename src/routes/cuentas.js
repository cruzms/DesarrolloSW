const router = require('express').Router();
const mongoose = require('mongoose');
const Cuenta = require('../models/cuenta');

router.get('/cuentas', (req, res) => {
    Cuenta.find((err,cuentas) => {
        if(err) return res.json({message:err});
        res.json(cuentas);
    });
});

router.get('/cuentas/:id',(req, res) => {
    Cuenta.findOne({_id: req.params.id }, (err, cuenta) => {
        if(err) return res.json({message:err});
        res.json(cuenta);
    });
});


router.post('/cuentas' ,(req,res) => {
    let nuevaCuenta = new Cuenta({
        Numero_cuenta: req.body.Numero_cuenta,
        Id_cliente: req.body.Id_cliente,
        Saldo: req.body.Saldo,
        Tipo : req.body.Tipo
    });
    nuevaCuenta.save((err,nuevaCuenta) => {
        if(err) {
            return res.json({ codigo: err});
        }
        res.json({ codigo: 'Cuenta Agregada'});
    });
});




router.delete('/cuentas/:id', (req, res) =>{
    Cuenta.remove({_id: req.params.id }, (err) => {
        if(err) return res.json({message: err});
        res.json({codigo: 'Cuenta Eliminada'});
    });
});



router.put('/cuentas/:id', (req, res) =>{
    Cuenta.update({_id: req.params.id} , req.body, (err,raw) => {
        if(err) return res.json({message: err});
        res.json({ codigo: 'Cuenta modificada'});
    });
});



module.exports = router;
