/**
 * @description Servicio encargado de la gestión de retos del servidor
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reto } from '../models/Reto';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class RetoService {
  domain = environment.api_url;

  constructor(private http: HttpClient) { }

  /**
 * Método encargado de adicionar un nuevo reto en el servidor
 * @param {Reto} nuevoReto - reto que se agregará al servidor
 * @returns Reto adicionado
 */
  addReto(nuevoReto: Reto) {
    return this.http.post<Reto>(`${this.domain}/api/retos`, nuevoReto)
      .map(res => res);
  }
}
