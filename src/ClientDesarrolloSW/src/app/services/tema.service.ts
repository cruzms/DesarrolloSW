/**
 * @description Servicio encargado de la gestión de temas del servidor
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tema } from '../models/Tema';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class TemaService {
  domain = environment.api_url;
  constructor(private http: HttpClient) { }

  /**
    * Método encargado de consultar los temas que corresponden a una materia y un grupo
    * @param {string} idMateria - id de la materia
    * @param {string} idGrado - id del grado
    * @returns Temas encontrados
    */
  getTemasMateria_Grupo(idMateria, idGrado) {
    return this.http.get<Tema[]>(`${this.domain}/api/temas/${idMateria}/${idGrado}`)
      .map(res => res);
  }
}
