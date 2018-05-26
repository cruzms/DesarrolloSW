process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Actividad = require('../src/models/actividad');


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/app');
let should = chai.should();

chai.use(chaiHttp);

/**
 * 
 * @test {Get} Prueba obteniendo todas las actividades
 * @testName test GetActividad
 * @testGroup Actividad 
 *
 * @testSuccess (200) {statusCode} statuscode Código HTTP
 * @testSuccess (200) {array}  Vector con todas las actividades
 *
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
 * 
 * @test {POST} Pruebas de post actividades
 * @testName test PostActividad
 * @testGroup Actividad 
 *
 * @testSuccess (200) {statusCode} statuscode Código HTTP
 * @testSuccess (200) {object}  Objeto con la informacion que devuelve el Post actividad
 * 
 * @testSuccess (400) {StatusCode} statuscode Código HTTP
 * @testSuccess (400) {object} Objeto con el mensaje indicando el error 
 */
describe('/Post actividad', () => {
    let actividad = {
        titulo: "Software",
        integrantes: 4,
        descripcion: "Entregar",
        objetivos: "No aprender",
        fechaLimite: "5/05/2015",
        grupo: "5b06f85754c7dc37b85c1665",
        materia: "5b01d18dff8943373413287f",
        tema: "5b06faa854c7dc37b85c1666",
        archivos:[]
    }
    it('agregar actividad', (done) => {
        
        chai.request(server)
            .post('/api/actividades')
            .send(actividad)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.a('object');
                actividad._id=res.body._id;
                done();
            });
    });
    
    it('Actividad con campos vacios', (done) => {
        let actividad1 = {
            titulo: " ",
            integrantes: 4,
            descripcion: " ",
            objetivos: "No aprender",
            fechaLimite: "5/05/2015",
            grupo: " ",
            materia: "5b01d18dff8943373413287f",
            tema: "5b06faa854c7dc37b85c1666",
            archivos:[]
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




