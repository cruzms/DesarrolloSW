var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://sqladmin:cisco123@ds257589.mlab.com:57589/testswdb', function () {

    // Load Mongoose models
    seeder.loadModels([
        './src/models/tema.js',
        './src/models/grupo.js',
        './src/models/materia.js',
        './src/models/profesor.js',
        './src/models/estudiante.js',
        './src/models/actividad.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['Tema', 'Grupo', 'Materia', 'Profesor', 'Estudiante', 'Actividad'], function () {

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
            }
        ]
    },
    {
        'model': 'Grupo',
        'documents': [{
                _id: "5b074186e33fae3a50d579f3",
                nombre: "Sexto"
            },
            {
                _id: "5b074186e33fae3a50d579f4",
                nombre: "Septimo"
            }
        ]
    },
    {
        'model': 'Materia',
        'documents': [{
                _id: "5b074186e33fae3a50d579f5",
                nombre: "Matematicas",
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
        'model': 'Profesor',
        'documents': [{
                _id: "1053854",
                nombre: "David",
                apellido: "ospina",
                materias: ["5b074186e33fae3a50d579f5"],
                grupos: ["5b074186e33fae3a50d579f3", "5b074186e33fae3a50d579f4"]
            },
            {
                _id: "1050111",
                nombre: "Falcao",
                apellido: "garcia",
                materias: ["5b074186e33fae3a50d579f6"],
                grupos: ["5b074186e33fae3a50d579f4"]
            }
        ]
    },
    {
        'model': 'Estudiante',
        'documents': [{
                _id: "5b074186e33fae3a50d579f7",
                nombre: "Pepito",
                apellido: "Perez",
                materias: ["5b074186e33fae3a50d579f5", "5b074186e33fae3a50d579f6"],
                grupo: "5b074186e33fae3a50d579f3"
            },
            {
                _id: "5b074186e33fae3a50d579f8",
                nombre: "Ana",
                apellido: "Silva",
                materias: ["5b074186e33fae3a50d579f6"],
                grupo: "5b074186e33fae3a50d579f4"
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
                grupo: "5b074186e33fae3a50d579f3",
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
                grupo: "5b074186e33fae3a50d579f3",
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