/**
 * @description Servicio encargado de la gestión de materias del servidor
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tema } from '../models/Tema';
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
  getTemasMateria(idMateria) {
    return this.http.get<Tema[]>(`${this.domain}/api/materias/consultarTemas/${idMateria}`)
      .map(res => res);
  }
}
