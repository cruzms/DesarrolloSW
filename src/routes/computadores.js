/**
 * @description Rutas y métodos HTTP disponibles para el CRUD de computadores 
 * @author Santiago Cruz
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Computador = require('../models/computador');

router.get('/', (req, res) => {
    Computador.find((err, computadores) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json(computadores);
    });
});

router.get('/:id', (req, res) => {
    Computador.findOne({ _id: req.params.id }, (err, computador) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json(computador);
    });
});

router.post('/', (req, res) => {
    let nuevoPC = new Computador({
        marca: req.body.marca,
        modelo: req.body.modelo,
        discoduro: req.body.discoduro,
        ram: req.body.ram,
        procesador: req.body.procesador,
        pulgadas: req.body.pulgadas,
        disponible: req.body.disponible
    });

    nuevoPC.save((err, nuevoPC) => {
        if (err) {
            return res.status(400).json({ message: err });
        }
        res.status(200).json({ message: 'producto agregado', object: nuevoPC });
    });
});

router.delete('/:id', (req, res) => {
    Computador.remove({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json({ message: 'producto eliminado' });
    });
});

router.put('/:id', (req, res) => {
    Computador.update({ _id: req.params.id }, req.body, { runValidators: true }, (err, raw) => {
        if (err) return res.status(400).json({ message: err });
        res.status(201).json({ message: 'producto modificado' });
    });
});

module.exports = router; 