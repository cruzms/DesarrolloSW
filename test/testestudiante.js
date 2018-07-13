process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/app');
let should = chai.should();
//const should = require('should');

chai.use(chaiHttp);
/**
Prueba del api get estudiantes donde hacemos una 
peticion de un estudiante y  este nos retorna
un status 200 y un objeto con el estudiante solicitado
 */
describe('/get estudiantes', () => {
    it('obtener el estudiante dado un id', (done) => {
        chai.request(server)
            .get('/api/estudiantes/5b074186e33fae3a50d579f7')
            .end((err, res) => {                
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();

            });
    });
});


/**
Prueba del api get estudiantes donde hacemos una 
peticion de un estudiante, pero con un id
que no existe  y este nos retorna un status 400
 y un objeto con el error
 */
describe('/get estudiantes', () => {
    it('Obtener estudiante con id incorrecto', (done) => {
        chai.request(server)
            .get('/api/estudiantes/5b074186e33fae3a50d579f')
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                done();
            });
    });
});