/**
 * @description Servicio encargado de la gestión de grupos del servidor
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grupo } from '../models/Grupo';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class GrupoService {
  domain = environment.api_url;
  constructor(private http: HttpClient) { }

  /**
  * Método encargado de consultar un grupo dado un id
  * @param {string} id - id del grupo a buscar
  * @returns grupo con el id ingresado
  */
  getGrupo(id) {
    return this.http.get<Grupo>(`${this.domain}/api/grupos/${id}`)
      .map(res => res);
  }
}
