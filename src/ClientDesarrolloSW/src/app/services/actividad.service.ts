/**
 * @description Servicio encargado de la gestión de grupos del servidor
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../models/Actividad';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class ActividadService {
  domain = environment.api_url;
  constructor(private http: HttpClient) { }

  /**
  * Método encargado de adicionar un nuevo carro en el servidor
  * @param {Carro} nuevoCarro - carro que se agregará al servidor
  * @returns Carro adicionado
  */
  addCarro(nuevaActividad: Actividad) {
    return this.http.post<Actividad>(`${this.domain}/api/actividades`, nuevaActividad)
      .map(res => res);
  }
}