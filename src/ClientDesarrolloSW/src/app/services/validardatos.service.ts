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
  ValidarActividad(titulo, descripcion, fechaLimite, integrantes, objetivos, grupo, materia, tema) {
    if (titulo == null || descripcion === '') {
      return { ok: false, message: 'Título incorrecto'};
    }
    if (descripcion == null || descripcion === '') {
      return { ok: false, message: 'Descripción incorrecta'};
    }
    if (fechaLimite == null || new Date() > new Date(fechaLimite)) {
      return { ok: false, message: 'Fecha incorrecta'};
    }
    if (integrantes == null) {
      return { ok: false, message: 'Número de integrantes incorrecto'};
    }
    if (objetivos == null || objetivos === '') {
      return { ok: false, message: 'Ingrese objetivos'};
    }
    if (grupo == null) {
      return { ok: false, message: 'Seleccione un grupo'};
    }
    if (materia == null) {
      return { ok: false, message: 'Seleccione una materia'};
    }
    if (tema == null) {
      return { ok: false, message: 'Seleccione un tema'};
    }
    return { ok: true, message: 'ok'};
  }
}
