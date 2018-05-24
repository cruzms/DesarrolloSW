/**
 * @description Servicio encargado de las validaciones de los modelos
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Injectable } from '@angular/core';
import { Actividad } from '../models/Actividad';
import { SubscriptionLoggable } from 'rxjs/testing/SubscriptionLoggable';
@Injectable()
export class ValidardatosService {

  constructor() { }

  /**
  * Método encargado de validar una actividad
  * @param {Actividad} actividad - actividad que se agregará al servidor
  * @returns Mensaje validación
  */
  ValidarActividad(titulo, descripcion, fechaLimite, integrantes, objetivos, grupo, materia, tema, archivos) {
    if (titulo == null || descripcion === '') {
      return { ok: false, message: 'Título incorrecto', actividad: null };
    }
    if (descripcion == null || descripcion === '') {
      return { ok: false, message: 'Descripción incorrecta', actividad: null };
    }
    if (fechaLimite == null) {
      return { ok: false, message: 'Fecha incorrecta', actividad: null };
    }
    if (integrantes == null) {
      return { ok: false, message: 'Número de integrantes incorrecto', actividad: null };
    }
    if (objetivos == null || objetivos === '') {
      return { ok: false, message: 'Ingrese objetivos', actividad: null };
    }
    if (grupo == null) {
      return { ok: false, message: 'Seleccione un grupo', actividad: null };
    }
    if (materia == null) {
      return { ok: false, message: 'Seleccione una materia', actividad: null };
    }
    if (tema == null) {
      return { ok: false, message: 'Seleccione un tema', actividad: null };
    }
    return {
      ok: true,
      message: 'Seleccione un tema',
      actividad: {
        titulo: titulo,
        descripcion: descripcion,
        fechaLimite: fechaLimite,
        integrantes: integrantes,
        objetivos: objetivos,
        grupo: grupo._id,
        materia: materia._id,
        tema: tema._id,
        archivos: archivos
      }
    };
  }
}
