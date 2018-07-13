define({ "api": [
  {
    "type": "Delete",
    "url": "/api/actividades/id",
    "title": "Elmininar actividades",
    "name": "DeleteActividades",
    "group": "Actividad",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "Mensaje",
            "description": "<p>de eliminado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si ocurre un error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/actividades.js",
    "groupTitle": "Actividad"
  },
  {
    "type": "GET",
    "url": "/api/actividades",
    "title": "Obtener todas las actividades",
    "name": "GetActividad",
    "group": "Actividad",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "actividades[]",
            "optional": false,
            "field": "actividades",
            "description": "<p>Lista de actividades</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si ocurre un error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/actividades.js",
    "groupTitle": "Actividad"
  },
  {
    "type": "GET",
    "url": "/api/actividades/:id",
    "title": "Obtener una actividad con un id proporcionado",
    "name": "GetActividadID",
    "group": "Actividad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la actividad</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Actividad",
            "optional": false,
            "field": "actividad",
            "description": "<p>Actividad buscada</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si no se encuentra la actividad con el id solicitado</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/actividades.js",
    "groupTitle": "Actividad"
  },
  {
    "type": "POST",
    "url": "/api/actividades",
    "title": "Agregar una actividad a la base de datos",
    "name": "PostActividad",
    "group": "Actividad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Actividad",
            "optional": false,
            "field": "Actividad",
            "description": "<p>La actividad que se va a agregar al sistema</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Actividad.nombre",
            "description": "<p>El nombre de la actividad</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"titulo\":\"Español\",\n    \"integrantes\": 1,\n    \"descripcion\": \"Texto\",\n    \"objetivos\": \"Texto\",\n    \"fechaLimite\": \"01/4/2016\",\n    \"gradoporgrupo\": \"ID grupo\",\n    \"materia\": \"ID materia\",\n    \"tema\": \"ID tema\",\n    \"archivos\": [\"ID 1\", \"ID 1\"]\n}",
          "type": "Actividad"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando que se agregó la actividad</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "object",
            "description": "<p>Actividad agregada</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando el error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/actividades.js",
    "groupTitle": "Actividad"
  },
  {
    "type": "GET",
    "url": "/api/actividades/consultarActividades/:id/:id2 Obtener las actividades",
    "title": "con un id de materia y grupos proporcionados",
    "name": "consultarActividades",
    "group": "Actividad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la materia</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id2",
            "description": "<p>Id del grupo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Actividad[]",
            "optional": false,
            "field": "actividades",
            "description": "<p>Actividades encontradas</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si no se encuentran actividades con los id ingresados</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/actividades.js",
    "groupTitle": "Actividad"
  },
  {
    "type": "GET",
    "url": "/api/archivos/descarga/:id",
    "title": "Descargar un archivo por su nombre",
    "name": "DescargaArchivoNombre",
    "group": "Archivo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>Nombre del archivo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Archivo",
            "optional": false,
            "field": "archivo",
            "description": "<p>Archivo buscado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si se produce un error en la solicitud</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "404",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si no se encuentra el archivo con el nombre enviado</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/archivos.js",
    "groupTitle": "Archivo"
  },
  {
    "type": "GET",
    "url": "/api/archivos",
    "title": "Obtener todas los archivos",
    "name": "GetArchivo",
    "group": "Archivo",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "archivos[]",
            "optional": false,
            "field": "archivos",
            "description": "<p>Lista de archivos</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si ocurre un error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/archivos.js",
    "groupTitle": "Archivo"
  },
  {
    "type": "GET",
    "url": "/api/archivos/:id",
    "title": "Obtener informacion de un archivo por su nombre",
    "name": "GetArchivoNombre",
    "group": "Archivo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>Nombre del archivo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Archivo",
            "optional": false,
            "field": "archivo",
            "description": "<p>Archivo buscado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si se produce un error en la solicitud</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "404",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si no se encuentra el archivo con el nombre enviado</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/archivos.js",
    "groupTitle": "Archivo"
  },
  {
    "type": "POST",
    "url": "/api/estudiantes/asignarGrupoEstudiante",
    "title": "Asigna un grupo a un estudiante",
    "name": "PostAsignarGrupoEstudiante",
    "group": "Asignar",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idEstudiante",
            "description": "<p>El id del estudiante</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idGradoporGrupo",
            "description": "<p>El id del gradoporgrupo a asignar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"idEstudiante\": \"\",\n    \"idGradoporGrupo\": \"\"\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando que se asignó el gradoporgrupo</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando el error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/asignarGrupo.js",
    "groupTitle": "Asignar"
  },
  {
    "type": "POST",
    "url": "/api/profesores/asignarGrupoProfesor",
    "title": "Asigna un grupo a un profesor",
    "name": "PostAsignarGrupoProfesor",
    "group": "Asignar",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idProfesor",
            "description": "<p>La cédula del profesor</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idGrupo",
            "description": "<p>El id del gradoporgrupo a asignar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"idProfesor\": 1053,\n    \"idGradoporGrupo\": \"\"\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando que se asignó el grupo</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando el error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/asignarGrupo.js",
    "groupTitle": "Asignar"
  },
  {
    "type": "POST",
    "url": "/api/estudiantes/asignarMateriaEstudiante",
    "title": "Asigna una materia a un estudiante",
    "name": "PostAsignarMateriaEstudiante",
    "group": "Asignar",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idEstudiante",
            "description": "<p>El id del estudiante</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idMateria",
            "description": "<p>El id de la materia a asignar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"idEstudiante\": \"\",\n    \"idMateria\": \"\"\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando que se asignó la materia</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando el error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/asignarMateria.js",
    "groupTitle": "Asignar"
  },
  {
    "type": "POST",
    "url": "/api/profesores/asignarMateriaProfesor",
    "title": "Asigna una materia a un profesor",
    "name": "PostAsignarMateriaProfesor",
    "group": "Asignar",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idProfesor",
            "description": "<p>La cédula del profesor</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idMateria",
            "description": "<p>El id de la materia a asignar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"idProfesor\": \"\",\n    \"idMateria\": \"\"\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando que se asignó la materia</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando el error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/asignarMateria.js",
    "groupTitle": "Asignar"
  },
  {
    "type": "GET",
    "url": "/api/estudiantes",
    "title": "Obtener todos los estudiantes",
    "name": "GetEstudiante",
    "group": "Estudiante",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "estudiantes[]",
            "optional": false,
            "field": "estudiantes",
            "description": "<p>Lista de estudiantes</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si ocurre un error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/estudiantes.js",
    "groupTitle": "Estudiante"
  },
  {
    "type": "GET",
    "url": "/api/estudiantes/:id",
    "title": "Obtener un estudiante con un id proporcionado",
    "name": "GetEstudianteID",
    "group": "Estudiante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id del Estudiante</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Estudiante",
            "optional": false,
            "field": "estudiante",
            "description": "<p>Estudiante buscado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si no se encuentra el estudiante con el id solicitado</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/estudiantes.js",
    "groupTitle": "Estudiante"
  },
  {
    "type": "GET",
    "url": "/api/estudiantes/consultarMaterias",
    "title": "Consultar las materias de un estudiante",
    "name": "GetMateriasEstudiante",
    "group": "Estudiante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El id del estudiante</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "materias[]",
            "optional": false,
            "field": "materias",
            "description": "<p>Lista de materias del estudiante</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si ocurre un error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/materiasEstudiante.js",
    "groupTitle": "Estudiante"
  },
  {
    "type": "POST",
    "url": "/api/estudiantes",
    "title": "Agregar un estudiante a la base de datos",
    "name": "PostEstudiante",
    "group": "Estudiante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Estudiante",
            "optional": false,
            "field": "Estudiante",
            "description": "<p>El estudiante que se va a agregar al sistema</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Estudiante.nombre",
            "description": "<ul> <li>El nombre del estudiante</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Estudiante.apellido",
            "description": "<ul> <li>El apellido del estudiante</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"nombre\": \"Nombre\",\n    \"apellido\": \"Apellido\"\n}",
          "type": "Estudiante"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando que se agregó el estudiante</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "object",
            "description": "<p>Estudiante agregado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando el error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/estudiantes.js",
    "groupTitle": "Estudiante"
  },
  {
    "type": "GET",
    "url": "/api/grados/:id",
    "title": "Obtener un grado con un id proporcionado",
    "name": "GetGradoID",
    "group": "Grado",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id del grado</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Grado",
            "optional": false,
            "field": "grado",
            "description": "<p>Grado buscado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si no se encuentra el grado con el id solicitado</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/grados.js",
    "groupTitle": "Grado"
  },
  {
    "type": "POST",
    "url": "/api/grados",
    "title": "Agregar un grado a la base de datos",
    "name": "PostGrado",
    "group": "Grado",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Grado",
            "optional": false,
            "field": "Grado",
            "description": "<p>El grado que se va a agregar al sistema</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Grado.nombre",
            "description": "<p>El nombre del grado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"nombre\": \"Sexto\"\n}",
          "type": "Grado"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando que se agregó el grado</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "object",
            "description": "<p>Grado agregado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando el error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/grados.js",
    "groupTitle": "Grado"
  },
  {
    "type": "GET",
    "url": "/api/gradosporgrupos",
    "title": "Obtener todos los gradosporgrupos",
    "name": "GetGradosporGrupo",
    "group": "GradoporGrupo",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "gradosporgrupo[]",
            "optional": false,
            "field": "gradosporgrupo",
            "description": "<p>Lista de gradosporgrupos</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si ocurre un error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/gradosporgrupos.js",
    "groupTitle": "GradoporGrupo"
  },
  {
    "type": "GET",
    "url": "/api/gradosporgrupos/:id",
    "title": "Obtener un gradoporgrupo con un id proporcionado",
    "name": "GetGradosporGrupoID",
    "group": "GradoporGrupo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id del gradoporgrupo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "GradoporGrupo",
            "optional": false,
            "field": "gradoporgrupo",
            "description": "<p>GradoporGrupo buscada</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si no se encuentra el gradoporgrupo con el id solicitado</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/gradosporgrupos.js",
    "groupTitle": "GradoporGrupo"
  },
  {
    "type": "POST",
    "url": "/api/gradosporgrupos",
    "title": "Agregar un gradoporgrupo a la base de datos",
    "name": "PostGradoporGrupo",
    "group": "GradoporGrupo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "GradoporGrupo",
            "optional": false,
            "field": "GradoporGrupo",
            "description": "<p>El gradoporgrupo que se va a agregar al sistema</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "GradoporGrupo.grado",
            "description": "<p>El grado que conformará el gradoporgrupo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "GradoporGrupo.grupo",
            "description": "<p>El grupo que conformará el gradoporgrupo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"grado\": \"5b074186e33fae3a50d579f3\",\n    \"grupo\": \"5b074186e33fae3a50d579d6\"\n}",
          "type": "GradoporGrupo"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando que se agregó el gradoporgrupo</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "object",
            "description": "<p>GradoporGrupo agregado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando el error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/gradosporgrupos.js",
    "groupTitle": "GradoporGrupo"
  },
  {
    "type": "GET",
    "url": "/api/grupos/:id",
    "title": "Obtener un grupo con un id proporcionado",
    "name": "GetGrupoID",
    "group": "Grupo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id del grupo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Grupo",
            "optional": false,
            "field": "grupo",
            "description": "<p>Grupo buscado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si no se encuentra el grupo con el id solicitado</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/grupos.js",
    "groupTitle": "Grupo"
  },
  {
    "type": "POST",
    "url": "/api/grupos",
    "title": "Agregar un grupo a la base de datos",
    "name": "PostGrupo",
    "group": "Grupo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Grupo",
            "optional": false,
            "field": "Grupo",
            "description": "<p>El grupo que se va a agregar al sistema</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Grupo.nombre",
            "description": "<p>El nombre del grupo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"nombre\": \"B\"\n}",
          "type": "Grupo"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando que se agregó el grupo</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "object",
            "description": "<p>Grupo agregado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando el error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/grupos.js",
    "groupTitle": "Grupo"
  },
  {
    "type": "GET",
    "url": "/api/materias",
    "title": "Obtener todas las materias",
    "name": "GetMateria",
    "group": "Materia",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "materias[]",
            "optional": false,
            "field": "materias",
            "description": "<p>Lista de materias</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si ocurre un error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/materias.js",
    "groupTitle": "Materia"
  },
  {
    "type": "GET",
    "url": "/api/materias/:id",
    "title": "Obtener una materia con un id proporcionado",
    "name": "GetMateriaID",
    "group": "Materia",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la materia</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Materia",
            "optional": false,
            "field": "materia",
            "description": "<p>Materia buscada</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si no se encuentra la materia con el id solicitado</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/materias.js",
    "groupTitle": "Materia"
  },
  {
    "type": "POST",
    "url": "/api/materias/asignarTema",
    "title": "Asigna un tema a una materia",
    "name": "PostAsignarTemaMateria",
    "group": "Materia",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idMateria",
            "description": "<p>El id de la materia</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idTema",
            "description": "<p>El id del tema a asignar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"idMateria\": \"\",\n    \"idTema\": \"\"\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando que se asignó el tema</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando el error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/asignarTema.js",
    "groupTitle": "Materia"
  },
  {
    "type": "POST",
    "url": "/api/materias",
    "title": "Agregar una materia a la base de datos",
    "name": "PostMateria",
    "group": "Materia",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Materia",
            "optional": false,
            "field": "Materia",
            "description": "<p>La materia que se va a agregar al sistema</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Materia.nombre",
            "description": "<p>El nombre de la materia</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"nombre\": \"Español\"\n}",
          "type": "Materia"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando que se agregó la materia</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "object",
            "description": "<p>Materia agregada</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando el error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/materias.js",
    "groupTitle": "Materia"
  },
  {
    "type": "Delete",
    "url": "/api/profesores/id",
    "title": "Elmininar profesores",
    "name": "DeleteProfesor",
    "group": "Profesor",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "Mensaje",
            "description": "<p>de eliminado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si ocurre un error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/profesores.js",
    "groupTitle": "Profesor"
  },
  {
    "type": "GET",
    "url": "/api/profesores/consultarGrupos",
    "title": "Consultar los grupos que tiene un profesor",
    "name": "GetGruposProfesor",
    "group": "Profesor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>La cédula del profesor</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "grupos[]",
            "optional": false,
            "field": "grupos",
            "description": "<p>Lista de grupos del profesor</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si ocurre un error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/gruposProfesor.js",
    "groupTitle": "Profesor"
  },
  {
    "type": "GET",
    "url": "/api/materias/consultarTemas",
    "title": "Consultar los temas que tiene una materia",
    "name": "GetMateriasProfesor",
    "group": "Profesor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>El id de la materia</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "temas[]",
            "optional": false,
            "field": "temas",
            "description": "<p>Lista de temas de la materia</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si ocurre un error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/temasMateria.js",
    "groupTitle": "Profesor"
  },
  {
    "type": "GET",
    "url": "/api/profesores/consultarMaterias",
    "title": "Consultar las materias que da un profesor",
    "name": "GetMateriasProfesor",
    "group": "Profesor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>La cédula del profesor</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "materias[]",
            "optional": false,
            "field": "materias",
            "description": "<p>Lista de materias del profesor</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si ocurre un error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/materiasProfesor.js",
    "groupTitle": "Profesor"
  },
  {
    "type": "GET",
    "url": "/api/profesores",
    "title": "Obtener todas los profesores",
    "name": "GetProfesor",
    "group": "Profesor",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "profesores[]",
            "optional": false,
            "field": "profesores",
            "description": "<p>Lista de profesores</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si ocurre un error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/profesores.js",
    "groupTitle": "Profesor"
  },
  {
    "type": "GET",
    "url": "/api/profesores/:id",
    "title": "Obtener un profesor con un id proporcionado",
    "name": "GetProfesorID",
    "group": "Profesor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id del profesor</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Profesor",
            "optional": false,
            "field": "profesor",
            "description": "<p>Profesor buscado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si no se encuentra el profesor con el id solicitado</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/profesores.js",
    "groupTitle": "Profesor"
  },
  {
    "type": "POST",
    "url": "/api/profesores",
    "title": "Agregar un profesor a la base de datos",
    "name": "PostProfesor",
    "group": "Profesor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Profesor",
            "optional": false,
            "field": "Profesor",
            "description": "<p>El profesor que se va a agregar al sistema</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Profesor._id",
            "description": "<ul> <li>La cédula del profesor</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Profesor.nombre",
            "description": "<ul> <li>El nombre del profesor</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Profesor.apellido",
            "description": "<ul> <li>El apellido del profesor</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"_id\": 1111,\n    \"nombre\": \"Nombre\",\n    \"apellido\": \"Apellido\"\n}",
          "type": "Profesor"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando que se agregó la profesor</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "object",
            "description": "<p>Profesor agregado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando el error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/profesores.js",
    "groupTitle": "Profesor"
  },
  {
    "type": "Delete",
    "url": "/api/retos/id",
    "title": "Elmininar reto",
    "name": "DeleteRetos",
    "group": "Reto",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "Mensaje",
            "description": "<p>de eliminacion</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si ocurre un error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/retos.js",
    "groupTitle": "Reto"
  },
  {
    "type": "GET",
    "url": "/api/retos",
    "title": "Obtener todas los retos",
    "name": "GetReto",
    "group": "Reto",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "retos[]",
            "optional": false,
            "field": "retos",
            "description": "<p>Lista de retos</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si ocurre un error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/retos.js",
    "groupTitle": "Reto"
  },
  {
    "type": "POST",
    "url": "/api/retos",
    "title": "Agregar un reto a la base de datos",
    "name": "PostReto",
    "group": "Reto",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Reto",
            "optional": false,
            "field": "Reto",
            "description": "<p>La reto que se va a agregar al sistema</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Reto.nombre",
            "description": "<p>El nombre del reto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n  \"nombre\": \"Quiz Nro 1\",\n  \"preguntas\": [\n    {\n      \"pregunta\":\"Pregunta?\",\n      \"imagen\":\"ID\",\n      \"respuestas\":[\n        {\n          \"texto\":\"respuesta 1\",\n          \"correcta\": false,\n          \"imagen\":\"\"\n        },\n        {\n          \"texto\":\"respuesta 2\",\n          \"correcta\": true,\n          \"imagen\":\"\"\n        }\n      ]\n    }\n  ],\n  \"gradosporgrupos\": \"ID\",\n  \"materia\": \"ID\",\n  \"tema\": \"ID\"        \n}",
          "type": "Reto"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando que se agregó el reto</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "object",
            "description": "<p>Reto agregado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando el error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/retos.js",
    "groupTitle": "Reto"
  },
  {
    "type": "GET",
    "url": "/api/retos/consultarRetosEstudiante",
    "title": "Consultar los retos de un estudiante",
    "name": "GetRetosEstudiante",
    "group": "Retos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gradoporgrupo",
            "description": "<p>El gradoporgrupo del estudiante</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "retos[]",
            "optional": false,
            "field": "retos",
            "description": "<p>Lista de retos del estudiante</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si ocurre un error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/retosEstudiante.js",
    "groupTitle": "Retos"
  },
  {
    "type": "GET",
    "url": "/api/temas/:id",
    "title": "Obtener un tema con un id proporcionado",
    "name": "GetTemaID",
    "group": "Tema",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id del tema</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Tema",
            "optional": false,
            "field": "tema",
            "description": "<p>Tema buscado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si no se encuentra el tema con el id solicitado</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/temas.js",
    "groupTitle": "Tema"
  },
  {
    "type": "GET",
    "url": "/api/temas/:materia/:grado",
    "title": "Obtener los temas de un grado y una materia",
    "name": "GetTemas",
    "group": "Tema",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "materia",
            "description": "<p>Id de la materia</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "grado",
            "description": "<p>Id del grupo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Tema[]",
            "optional": false,
            "field": "temas",
            "description": "<p>Lista de temas</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Si no se encuentran temas</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/temas.js",
    "groupTitle": "Tema"
  },
  {
    "type": "POST",
    "url": "/api/temas",
    "title": "Agregar un tema a la base de datos",
    "name": "PostTema",
    "group": "Tema",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Tema",
            "optional": false,
            "field": "Tema",
            "description": "<p>El tema que se va a agregar al sistema</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Tema.nombre",
            "description": "<p>El nombre del tema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"nombre\": \"Leyes de los exponentes\"\n}",
          "type": "Tema"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando que se agregó el tema</p>"
          },
          {
            "group": "200",
            "type": "Json",
            "optional": false,
            "field": "object",
            "description": "<p>Tema agregado</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "StatusCode",
            "optional": false,
            "field": "statuscode",
            "description": "<p>Código HTTP</p>"
          },
          {
            "group": "400",
            "type": "Json",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje indicando el error en la solicitud</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/temas.js",
    "groupTitle": "Tema"
  }
] });
