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
  * Método encargado de consultar la materia dado un id
  * @param {string} id - id de la materia a buscar
  * @returns Materia con el id ingresado
  */
  getMateria(id) {
    return this.http.get<Materia>(`${this.domain}/api/materias/${id}`)
      .map(res => res);
  }
}
