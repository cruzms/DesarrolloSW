process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Reto = require('../src/models/reto')


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/app');
let should = chai.should();

chai.use(chaiHttp);




/**
Prueba del api get retos donde hacemos una 
peticion de todos los retos y nos retorna
un status 200 y un array con todos los retos
existentes
 */
describe('/get retos', () => {
    it('obtener todos los retos', (done) => {
        chai.request(server)
            .get('/api/retos')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();

            });
    });
});

/**
Prueba del api post retos donde se ingresa
un reto que nos retorna un status 200 y un
objeto con el reto agregado y mensaje de exito.
Tambien se hace una prueba dejando espacios sin datos
y nos retorna un status 400 y un objeto con el mensaje
de error
 */
describe('/Post reto', () => {
    let reto = {
        publicado: false,
        gradosporgrupos: [],
        preguntas: [ ],
        nombre: "Reto realizando pruebas",
        gradoporgrupo: "5b074186e33fae3a50d579d9",
        materia: "5b074186e33fae3a50d579f5",
        tema: "5b074186e33fae3a50d579f1"
    }
    it('agregar reto', (done) => {
        
        chai.request(server)
            .post('/api/retos')
            .send(reto)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.a('object');
                reto._id=res.body.object._id;
                done();
            });
    });
    
    it('Reto con campos vacios', (done) => {
        let reto1 = {
            publicado: false,
            gradosporgrupos: [],
            preguntas: [ ],
            nombre: "",
            gradoporgrupo: "5b074186e33fae3a50d579d9",
            materia: "5b074186e33fae3a50d579f5",
            tema: "5b074186e33fae3a50d579f1"
        }
        chai.request(server)
            .post('/api/retos')
            .send(reto1)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.a('object');
                done();
            });
    });
    after(() => {
        Reto.remove({_id:reto._id}, (err) => {
        });
    });
});