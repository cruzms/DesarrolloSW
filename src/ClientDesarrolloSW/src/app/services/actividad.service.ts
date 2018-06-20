/**
 * @description Servicio encargado de la gestión de actividades del servidor
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../models/Actividad';
import { environment } from '../../environments/environment';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ActividadService {
  domain = environment.api_url;
  constructor(private http: HttpClient) { }
  actividades: Actividad[][] = [];
  /**
  * Método encargado de adicionar una nueva actividad en el servidor
  * @param {Carro} nuevaActividad - actividad que se agregará al servidor
  * @returns Actividad adicionada
  */
  addActividad(nuevaActividad: Actividad) {
    return this.http.post<Actividad>(`${this.domain}/api/actividades`, nuevaActividad)
      .map(res => res);
  }

  /**
  * Método encargado de consultar una actividad en el servidor
  * @returns Actividad consultada
  */
  consultarActividades(idGrupo, idMateria) {
    return this.http.get(`${this.domain}/api/actividades/consultarActividades/${idGrupo}/${idMateria}`)
      .map((res: Response) => res)
      .catch((err: Response) => Observable.throw(err));
  }
}
