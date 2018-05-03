const router = require('express').Router();
const mongoose = require('mongoose');
const Carro = require('../models/carro');

router.get('/', (req, res) => {
    Carro.find((err, carros) => {
        if (err) return res.json({ Message: err });
        res.status(200).json(carros);
    });
});

router.get('/:id', (req, res) => {
    Carro.findOne({ _id: req.params.id }, (err, carro) => {
        if (err) return res.json({ Message: err });
        res.json(carro);
    });
});

router.post('/', (req, res) => {
    const carro = req.body;
    let nuevoCarro = new Carro({
        marca: carro.marca,
        modelo: carro.modelo,
        color: carro.color,
        placa: carro.placa,
        puertas: carro.puertas,
        peso: carro.peso,
        ano: carro.ano
    });

    nuevoCarro.save((err, carroAgregado) => {
        if (err) {
            return res.json({ codigo: err });
        }
        res.status(200).json(carroAgregado);
    });
});

router.delete('/:id', (req, res) => {
    Carro.remove({ _id: req.params.id }, (err) => {
        if (err) return res.json({ message: err });
        res.status(200).json({Message : "Carro eliminado"});
    });
});

router.put('/:id', (req, res) => {
    Carro.update({_id: req.params.id} , req.body, (err) => {
        if (err) return res.json({ message: err });
        res.status(200).json({Message : "Carro modificado"});
    });
});

module.exports = router; 