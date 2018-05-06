/**
 * @description Clase contenedora de las funciones HTTP disponibles para los carros
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

const router = require('express').Router();
const mongoose = require('mongoose');
const Carro = require('../models/carro');

/**
* {get} /api/carros Obtiene todos los carros
* @return {(String|carro[])} Un mensaje indicando si no se encontraron carros o la lista de objetos carros
*/
router.get('/', (req, res) => {
    Carro.find((err, carros) => {
        if (err) return res.json({ Message: err });
        res.status(200).json(carros);
    });
});

/**
* {get} /api/carros/:id Obtiene el carro con un id determinado
* @param {String} id - id del carro a buscar
* @return {(String|carro)} Un mensaje indicando si no se encontró el carro o el objeto carro
*/
router.get('/:id', (req, res) => {
    Carro.findOne({ _id: req.params.id }, (err, carro) => {
        if (err) return res.json({ Message: err });
        res.json(carro);
    });
});

/**
* {post} /api/carros Agrega un carro al sistema
* @param {String} req.body - objeto carro
* @return {(String|carro)} Un mensaje indicando si no se adicionó el carro o el objeto carro adicionado
*/
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
            return res.json({ Message: err });
        }
        res.status(200).json(carroAgregado);
    });
});

/**
* {delete} /api/carros/:id Elimina el carro con un id determinado
* @param {String} id - id del carro a eliminar
* @return {String} Un mensaje indicando si se pudo eliminar el carro
*/
router.delete('/:id', (req, res) => {
    Carro.remove({ _id: req.params.id }, (err) => {
        if (err) return res.json({ Message: err });
        res.status(200).json({Message : "Carro eliminado"});
    });
});

/**
* {put} /api/carros Modifica un carro en el sistema
* @param {String} (Request body) - objeto carro con los datos nuevos
* @return {(String|carro)} Un mensaje indicando si se modificó el carro
*/
router.put('/:id', (req, res) => {
    Carro.update({_id: req.params.id} , req.body, (err) => {
        if (err) return res.json({ Message: err });
        res.status(200).json({Message : "Carro modificado"});
    });
});

module.exports = router; 