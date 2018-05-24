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

// Create storage engine
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

router.post('/upload', upload.single('file'), (req, res) => {
    // res.json({ file: req.file });
    res.redirect('/');
});

router.get('/', (req, res) => {
    console.log(gfs);
    gfs.find().toArray((err, files) => {
        return res.json(files);
    });
});

module.exports = router;
