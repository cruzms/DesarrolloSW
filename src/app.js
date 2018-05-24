const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const crypto = require('crypto');

mongoose.connect('mongodb://sqladmin:cisco123@ds257589.mlab.com:57589/testswdb');
// mongoose.connect('mongodb://localhost:27017/testDB');
const db = mongoose.connection;
//GridFs
gfs = null;
// si se conecto
db.once('open', () => {
    console.log('DB conectada');
    gfs = Grid(db.db, mongoose.mongo);
    gfs.collection('archivos');
});

// si hay errores
db.on('error', (err) => {
    console.log('Error DB');
});

const app = express();
const catalogoApiRouter = require('./routes/catalogoApi');

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2); //formato de respuesta json
app.set('view engine', 'html');
//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Static files
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendfile('./public/index.html');
});
//Routes
app.use('/api', catalogoApiRouter);

//Start server
app.listen(app.get('port'), () => {
    console.log('Server port', app.get('port'));
});
