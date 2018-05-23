/**
 * @description Servicio encargado de la gestión de materias del servidor
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Materia } from '../models/Materia';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class MateriaService {
  domain = environment.api_url;
  constructor(private http: HttpClient) { }

  /**
  * Método encargado de consultar las materias de un profesor
  * @param {string} idProfesor - id del profesor
  * @returns Materias del profesor ingresado
  */
  getMateriasProfesor(idProfesor) {
    return this.http.get<Materia[]>(`${this.domain}/api/profesores/consultarMaterias/${idProfesor}`)
      .map(res => res);
  }
}
