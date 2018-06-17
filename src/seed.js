var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://sqladmin:cisco123@ds257589.mlab.com:57589/testswdb', function () {

    // Load Mongoose models
    seeder.loadModels([
        './src/models/tema.js',
        './src/models/grupo.js',
        './src/models/grado.js',
        './src/models/reto.js',
        './src/models/gradoporgrupo.js',
        './src/models/materia.js',
        './src/models/profesor.js',
        './src/models/estudiante.js',
        './src/models/actividad.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['Tema', 'Grupo', 'Grado', 'GradoporGrupo', 'Reto', 'Materia', 'Profesor', 'Estudiante', 'Actividad'], function () {

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
            seeder.disconnect();
        });

    });
});

// Data array containing seed data - documents organized by Model
var data = [{
        'model': 'Tema',
        'documents': [{
                _id: "5b074186e33fae3a50d579f1",
                nombre: "Sumas"
            },
            {
                _id: "5b074186e33fae3a50d579f2",
                nombre: "Restas"
            },
            {
                _id: "5b1080a61b2c743357abe441",
                nombre: "Multiplicaciones"
            },
            {
                _id: "5b1080a61b2c743357abe442",
                nombre: "Divisiones"
            }
        ]
    },
    {
        'model': 'Grado',
        'documents': [{
                _id: "5b074186e33fae3a50d579f3",
                nombre: "Sexto"
            },
            {
                _id: "5b074186e33fae3a50d579f4",
                nombre: "Séptimo"
            }
        ]
    },
    {
        'model': 'Grupo',
        'documents': [{
                _id: "5b074186e33fae3a50d579d5",
                nombre: "A"
            },
            {
                _id: "5b074186e33fae3a50d579d6",
                nombre: "B"
            }
        ]
    },
    {
        'model': 'GradoporGrupo',
        'documents': [{
                _id: "5b074186e33fae3a50d579d7",
                nombre: "Sexto A",
                grado: "5b074186e33fae3a50d579f3",
                grupo: "5b074186e33fae3a50d579d5"
            },
            {
                _id: "5b074186e33fae3a50d579d8",
                nombre: "Sexto B",
                grado: "5b074186e33fae3a50d579f3",
                grupo: "5b074186e33fae3a50d579d6"
            },
            {
                _id: "5b074186e33fae3a50d579d9",
                nombre: "Séptimo A",
                grado: "5b074186e33fae3a50d579f4",
                grupo: "5b074186e33fae3a50d579d5"
            }
        ]
    },
    {
        'model': 'Materia',
        'documents': [{
                _id: "5b074186e33fae3a50d579f5",
                nombre: "Matemáticas",
                temas: ["5b074186e33fae3a50d579f1", "5b074186e33fae3a50d579f2"]
            },
            {
                _id: "5b074186e33fae3a50d579f6",
                nombre: "Lenguaje",
                temas: []
            }
        ]
    },
    {
        'model': 'Reto',
        'documents': [{
                _id: "5b074186e33fae3a50d579a1",
                "nombre": "Quiz Nro 1",
                "preguntas": [{
                    "pregunta": "Pregunta?",
                    "imagen": "ID",
                    "respuestas": [{
                            "texto": "respuesta 1",
                            "correcta": false,
                            "imagen": ""
                        },
                        {
                            "texto": "respuesta 2",
                            "correcta": true,
                            "imagen": ""
                        }
                    ]
                }],
                "gradoporgrupo": "5b074186e33fae3a50d579d7",
                "materia": "5b074186e33fae3a50d579f6",
                "tema": "5b074186e33fae3a50d579f2"
            },
            {
                _id: "5b074186e33fae3a50d579a2",
                "nombre": "Quiz Nro 2",
                "preguntas": [{
                    "pregunta": "Pregunta 2?",
                    "imagen": "ID",
                    "respuestas": [{
                            "texto": "respuesta 1",
                            "correcta": false,
                            "imagen": ""
                        },
                        {
                            "texto": "respuesta 2",
                            "correcta": true,
                            "imagen": ""
                        }
                    ]
                }],
                "gradoporgrupo": "5b074186e33fae3a50d579d9",
                "materia": "5b074186e33fae3a50d579f5",
                "tema": "5b074186e33fae3a50d579f1"
            }
        ]
    },
    {
        'model': 'Profesor',
        'documents': [{
                _id: "1053854",
                nombre: "David",
                apellido: "Ospina",
                materias: ["5b074186e33fae3a50d579f5"],
                gradosporgrupos: ["5b074186e33fae3a50d579d7", "5b074186e33fae3a50d579d8"]
            },
            {
                _id: "1050111",
                nombre: "Falcao",
                apellido: "Garcia",
                materias: ["5b074186e33fae3a50d579f6"],
                gradosporgrupos: ["5b074186e33fae3a50d579d9"]
            }
        ]
    },
    {
        'model': 'Estudiante',
        'documents': [{
                _id: "5b074186e33fae3a50d579f7",
                nombre: "Pepito",
                apellido: "Pérez",
                materias: ["5b074186e33fae3a50d579f5", "5b074186e33fae3a50d579f6"],
                gradopogrupo: "5b074186e33fae3a50d579d7"
            },
            {
                _id: "5b074186e33fae3a50d579f8",
                nombre: "Ana",
                apellido: "Silva",
                materias: ["5b074186e33fae3a50d579f6"],
                gradoporgrupo: "5b074186e33fae3a50d579d8"
            }
        ]
    },
    {
        'model': 'Actividad',
        'documents': [{
                _id: "5b074186e33fae3a50d579d3",
                titulo: "Ejercicio de sumas",
                integrantes: 1,
                descripcion: "Seleccionar dos numeros random y sumarlos.",
                objetivos: "Aprender a sumar correctamente.",
                fechaLimite: "07/4/2018",
                gradoporgrupo: "5b074186e33fae3a50d579d7",
                materia: "5b074186e33fae3a50d579f5",
                tema: "5b074186e33fae3a50d579f1",
                archivos: [{
                    "file": "123456789.jpg",
                    "nombreOriginal": "image-ejemplo-suma.jpg"
                }, {
                    "file": "987654321.jpg",
                    "nombreOriginal": "image-ejercicio-suma.jpg"
                }]
            },
            {
                _id: "5b074186e33fae3a50d579d4",
                titulo: "Ejercicio de restas",
                integrantes: 1,
                descripcion: "Seleccionar dos numeros random y restarlos.",
                objetivos: "Aprender a restar correctamente.",
                fechaLimite: "01/7/2018",
                gradoporgrupo: "5b074186e33fae3a50d579d8",
                materia: "5b074186e33fae3a50d579f5",
                tema: "5b074186e33fae3a50d579f2",
                archivos: [{
                    "file": "123498765.jpg",
                    "nombreOriginal": "image-ejemplo-resta.jpg"
                }, {
                    "file": "987612345.jpg",
                    "nombreOriginal": "image-ejercicio-resta.jpg"
                }]
            }

        ]
    }
];