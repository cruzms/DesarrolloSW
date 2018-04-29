const router = require('express').Router();
const mongoose = require('mongoose');
const Computador = require('../models/computador');

router.get('/computadores', (req, res) => {
    Computador.find((err, computadores) => {
        if (err) return res.json({ message: err });
        res.json(computadores);
    });
});

router.get('/computadores/:id', (req, res) => {
    Computador.findOne({ _id: req.params.id }, (err, computador) => {
        if (err) return res.json({ message: err });
        res.json(computador);
    });
});

router.post('/computadores', (req, res) => {
    let nuevoPC = new Computador({
        marca: req.body.nombre,
        modelo: req.body.correo,
        discoduro: req.body.discoduro,
        ram: req.body.ram,
        procesador: req.body.procesador,
        pulgadas: req.body.pulgadas,
        disponible: req.body.disponible
    });

    nuevoPC.save((err, nuevoPC) => {
        if (err) {
            return res.json({ codigo: err });
        }
        res.json({ codigo: 'producto agregado' });
    });
});

router.delete('/computadores/:id', (req, res) => {
    Computador.remove({ _id: req.params.id }, (err) => {
        if (err) return res.json({ message: err });
        res.json({ codigo: 'producto eliminado' });
    });
});

router.put('/computadores/:id', (req, res) => {
    Computador.update({_id: req.params.id} , req.body, (err,raw) => {
        if (err) return res.json({ message: err });
        res.json({ codigo: 'producto modificado' });
    });
});

module.exports = router; 