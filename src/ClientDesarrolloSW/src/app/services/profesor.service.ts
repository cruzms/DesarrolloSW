/**
 * @description Servicio encargado de la gestión del profesor en el servidor
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profesor } from '../models/Profesor';
import { Materia } from '../models/Materia';
import { Grupo } from '../models/Grupo';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

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

  /**
    * Método encargado de consultar las materias de un profesor
    * @param {string} idProfesor - id del profesor
    * @returns Materias del profesor ingresado
    */
  getMateriasProfesor(idProfesor) {
    return this.http.get<Materia[]>(`${this.domain}/api/profesores/consultarMaterias/${idProfesor}`)
      .map(res => res);
  }

  /**
    * Método encargado de consultar los grupos de un profesor
    * @param {string} idProfesor - id del profesor
    * @returns Grupos del profesor ingresado
    */
   getGruposProfesor(idProfesor) {
    return this.http.get<Grupo[]>(`${this.domain}/api/profesores/consultarGrupos/${idProfesor}`)
      .map(res => res);
  }
}
