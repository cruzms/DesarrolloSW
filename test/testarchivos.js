

process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Actividad = require('../src/models/actividad');


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/app');
let should = chai.should();

chai.use(chaiHttp);

/**
Prueba del api get actividades donde hacemos una 
peticion de todas las actividades y nos retorna
un status 200 y un array con todas las actividades
 */
describe('/get actividades', () => {
    it('obtener todas las actividades', (done) => {
        chai.request(server)
            .get('/api/actividades')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();

            });
    });
});

/**
Prueba del api post actividad donde se ingresa
una actividad que nos retorna un status 200 y un
objeto con la actividad agregada y mensaje de exito.
Tambien se hace una prueba dejando espacios sin datos
y nos retorna un status 400 y con objeto con el mensaje
de error
 */
describe('/Post actividad', () => {
    let actividad = {
        integrantes: 4,
 		archivos:[],
		titulo: "Ejercicio integrales",
        descripcion: "Entregar",
        logros: "Trabajo en equipo",
        fechaLimite: "5/05/2019",
        gradoporgrupo: "5b074186e33fae3a50d579d7",
        materia: "5b074186e33fae3a50d579f5",
        tema: "5b074186e33fae3a50d579f2",
        profesor:1053854
    }
    it('agregar actividad', (done) => {
        
        chai.request(server)
            .post('/api/actividades')
            .send(actividad)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.a('object');
                actividad._id=res.body.object._id;
                done();
            });
    });
    
    it('Actividad con campos vacios', (done) => {
        let actividad1 = {
            integrantes: 4,
            archivos:[],
            titulo: "",
            descripcion: "Entregar",
            logros: "Trabajo en equipo",
            fechaLimite: "5/05/2019",
            gradoporgrupo: "5b074186e33fae3a50d579d7",
            materia: "5b074186e33fae3a50d579f5",
            tema: "5b074186e33fae3a50d579f2",
            profesor:1053854
        }
        chai.request(server)
            .post('/api/actividades')
            .send(actividad1)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.a('object');
                done();
            });
    });
    after(() => {
        Actividad.remove({_id:actividad._id}, (err) => {
        });
    });
});







