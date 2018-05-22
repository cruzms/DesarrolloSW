/**
 * @description Servicio encargado de la gestión de temas del servidor
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tema } from '../models/Tema';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class TemaService {
  domain = environment.api_url;
  constructor(private http: HttpClient) { }

  /**
  * Método encargado de consultar un tema dado un id
  * @param {string} id - id del tema a buscar
  * @returns tema con el id ingresado
  */
  getTema(id) {
    return this.http.get<Tema>(`${this.domain}/api/temas/${id}`)
      .map(res => res);
  }
}
