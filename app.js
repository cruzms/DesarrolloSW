const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://sqladmin:cisco123@ds257589.mlab.com:57589/testswdb');
// mongoose.connect('mongodb://localhost:27017/testDB');
const db = mongoose.connection;
// si se conecto
db.once('open', () => {
    console.log('DB conectada');
});

// si hay errores
db.on('error', (err) => {
    console.log('Error DB');
});

const app = express();
const indexRouter = require('./routes/index');
const computadoresRouter = require('./routes/computadores');

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); 
app.use('/api', computadoresRouter);

app.listen(app.get('port'), () => {
    console.log('Server port 3000')
});