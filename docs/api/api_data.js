define({ "api": [
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
            "type": "StatusCode",
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
          "content": "{\n    \"nombre\":\"Español\"\n}",
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
            "type": "StatusCode",
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
            "type": "StatusCode",
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
          "content": "{\n    \"nombre\":\"Español\"\n}",
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
            "type": "StatusCode",
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
  }
] });