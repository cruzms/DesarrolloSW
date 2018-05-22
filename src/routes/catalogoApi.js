/**
 * @description Catálogo de rutas para las direcciones correspondientes al api
 * @author Santiago Cruz
 * @version 1.0
 */
const router = require('express').Router();
const profesoresRouter = require('./profesores');
const materiasRouter = require('./materias');
const actividadesRouter = require('./actividades');
const gruposRouter = require('./grupos');
const temasRouter = require('./temas');

router.use('/profesores', profesoresRouter);
router.use('/materias', materiasRouter);
router.use('/actividades', actividadesRouter);
router.use('/grupos', gruposRouter);
router.use('/temas', temasRouter);

module.exports = router;
