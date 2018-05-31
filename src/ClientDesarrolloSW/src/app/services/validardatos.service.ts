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
  ValidarActividad(titulo, descripcion, fechaLimite, integrantes, grupo, materia, tema) {
    if (titulo == null || descripcion === '') {
      return { ok: false, message: 'El título es obligatorio' };
    }
    if (descripcion == null || descripcion === '') {
      return { ok: false, message: 'La descripción es obligatoria' };
    }
    if (fechaLimite == null) {
      return { ok: false, message: 'La fecha es obligatoria' };
    }
    if (new Date() > new Date(fechaLimite)) {
      return { ok: false, message: 'Fecha no válida, el día seleccionado es una fecha anterior' };
    }
    if (integrantes == null) {
      return { ok: false, message: 'El número de integrantes es obligatorio' };
    }
    if (integrantes < 0) {
      return { ok: false, message: 'El número de integrantes debe ser mayor a 0' };
    }
    if (grupo == null) {
      return { ok: false, message: 'Seleccione un grupo' };
    }
    if (materia == null) {
      return { ok: false, message: 'Seleccione una materia' };
    }
    if (tema == null) {
      return { ok: false, message: 'Seleccione un tema' };
    }
    return { ok: true, message: 'ok' };
  }
}
