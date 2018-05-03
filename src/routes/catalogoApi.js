/**
 * @description Catálogo de rutas para las direcciones correspondientes al api
 * @author Santiago Cruz
 * @version 1.0
 */
const router = require('express').Router();

const computadoresRouter = require('./computadores');
const carrosRouter = require('./carros');
const cuentasRouter = require('./cuentas');

router.use('/computadores', computadoresRouter);
router.use('/carros', carrosRouter);
router.use('/cuentas',cuentasRouter);

module.exports = router;
