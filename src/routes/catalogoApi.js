/**
 * @description Catálogo de rutas para las direcciones correspondientes al api
 * @author Santiago Cruz
 * @version 1.0
 */
const router = require('express').Router();
const profesoresRouter = require('./profesores');
const materiasRouter = require('./materias');

router.use('/profesores', profesoresRouter);
router.use('/materias', materiasRouter);

module.exports = router;
