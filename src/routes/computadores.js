/**
 * @description Rutas y métodos HTTP disponibles para el CRUD de computadores 
 * @author Santiago Cruz
 * @version 1.0
 */
const router = require('express').Router();
const mongoose = require('mongoose');
const Computador = require('../models/computador');

/**
 * Obtener todos los computadores
 * URL: /api/computadores
 * Método HTTP: GET
 * @returns {StatusCode computadores[]} - Código HTTP:200 y lista de computadores
 * o Código HTTP:400 si ocurre un error en la solicitud
 */
router.get('/', (req, res) => {
    Computador.find((err, computadores) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json(computadores);
    });
});

/**
 * Obtener un computador con un id proporcionado
 * URL: /api/computadores/:id
 * Método HTTP: GET
 * @param {String} [id] - ID del computador buscado
 * @returns {StatusCode computador} - Código HTTP:200 y objeto computador
 * o Código HTTP:400 si no se encuentra el computador con el id solicitado
 */
router.get('/:id', (req, res) => {
    Computador.findOne({ _id: req.params.id }, (err, computador) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json(computador);
    });
});

/**
 * Agregar un computador a la base de datos
 * URL: /computadores
 * Método HTTP: POST
 * @param {Object} Computador - El computador que se va a agregar al sistema
 * @param {String} Computador.marca - La marca del computador 
 * @param {String} Computador.modelo - El modelo del computador 
 * @returns {StatusCode} Código HTTP:200 un mensaje indicando que se agrego y el computador agregado
 * o Código HTTP:400 y un mensaje indicando el error en la solicitud
 */
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

/**
 * Eliminar un computador de la base de datos
 * URL: /computadores/:id
 * Método HTTP: DELETE
 * @param {String} [id] - ID del computador a eliminar
 * @returns {StatusCode} - Código HTTP:200 y un mensaje indicando que se elimino el computador
 * o Código HTTP:400 y un mensaje indicando el error en la solicitud
 */
router.delete('/:id', (req, res) => {
    Computador.remove({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json({ message: 'producto eliminado' });
    });
});

/**
 * Actualizar un computador con el id proporcionado
 * URL: /computadores/:id
 * Método HTTP: PUT
 * @param {String} [id] - ID del computador a actualizar
 * @returns {StatusCode} - Código HTTP:200 y un mensaje indicando que se modifico el computador
 * o Código HTTP:400 y un mensaje indicando el error en la solicitud
 */
router.put('/:id', (req, res) => {
    Computador.update({ _id: req.params.id }, req.body, { runValidators: true }, (err, raw) => {
        if (err) return res.status(400).json({ message: err });
        res.status(201).json({ message: 'producto modificado' });
    });
});

module.exports = router; 