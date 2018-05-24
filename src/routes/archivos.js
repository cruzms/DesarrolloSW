/**
 * @description Rutas y métodos HTTP disponibles para el CRUD de archivos
 * @author Santiago Cruz
 * @version 1.0
 */

const router = require('express').Router();
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path');
const app = require('../app');

/**
 * Storage engine
 */
const storage = new GridFsStorage({
    url: 'mongodb://sqladmin:cisco123@ds257589.mlab.com:57589/testswdb',
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'archivos'
                };
                resolve(fileInfo);
            });
        });
    }
});
const upload = multer({ storage });

router.post('/upload', upload.array('archivos'), (req, res) => {
    res.json({ file: req.files });
    // res.redirect('/');
});

/**
 * @api {GET} /api/archivos Obtener todas los archivos
 * @apiName GetArchivo
 * @apiGroup Archivo
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {archivos[]} archivos Lista de archivos
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si ocurre un error en la solicitud
 */
router.get('/', (req, res) => {
    gfs.files.find().toArray((err, files) => {
        return res.json(files);
    });
});

/** 
 * @api {GET} /api/archivos/:id Obtener informacion de un archivo por su nombre
 * @apiName GetArchivoNombre
 * @apiGroup Archivo 
 * 
 * @apiParam  {String} filename Nombre del archivo
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Archivo} archivo Archivo buscado
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si se produce un error en la solicitud
 * 
 * @apiError (404) {StatusCode} statuscode Código HTTP
 * @apiError (404) {Json} message Si no se encuentra el archivo con el nombre enviado
 */
router.get('/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        if (err) { return res.status(400).json({ message: err }); }

        if (!file || file.length === 0) {
            return res.status(404).json({
                message: 'No existe el archivo'
            });
        }

        return res.json(file);
    });
});

/** 
 * @api {GET} /api/archivos/descarga/:id Descargar un archivo por su nombre
 * @apiName DescargaArchivoNombre
 * @apiGroup Archivo 
 * 
 * @apiParam  {String} filename Nombre del archivo
 * 
 * @apiSuccess (200) {StatusCode} statuscode Código HTTP
 * @apiSuccess (200) {Archivo} archivo Archivo buscado
 * 
 * @apiError (400) {StatusCode} statuscode Código HTTP
 * @apiError (400) {Json} message Si se produce un error en la solicitud
 * 
 * @apiError (404) {StatusCode} statuscode Código HTTP
 * @apiError (404) {Json} message Si no se encuentra el archivo con el nombre enviado
 */
router.get('/descarga/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        if (err) { return res.status(400).json({ message: err }); }

        if (!file || file.length === 0) {
            return res.status(404).json({
                message: 'No existe el archivo'
            });
        }

        res.set('Content-Type', file.contentType);
        res.set('Content-Disposition', 'attachment; filename="' + file.filename + '"');
        let readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);
    });
});

module.exports = router;
