/**
 * @description Servicio encargado de la gestión del profesor en el servidor
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profesor } from '../models/Profesor';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class ProfesorService {
  domain = environment.api_url;
  constructor(private http: HttpClient) { }

  /**
  * Método encargado de consultar un profesor dado un id
  * @param {string} id - id del profesor a buscar
  * @returns profesor con el id ingresado
  */
  getProfesor(id) {
    return this.http.get<Profesor>(`${this.domain}/api/profesores/${id}`)
      .map(res => res);
  }
}
