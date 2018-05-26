/**
 * @description Servicio encargado de la gestión del estudiante en el servidor
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Injectable } from '@angular/core';
import { Estudiante } from '../models/Estudiante';
import { HttpClient } from '@angular/common/http';
import { Materia } from '../models/Materia';
import { environment } from '../../environments/environment';

@Injectable()
export class EstudianteService {
  domain = environment.api_url;
  constructor(private http: HttpClient) { }
  idEstudiante = '5b074186e33fae3a50d579f7'; // debe existir este id
  /**
  * Método encargado de consultar un estudiante dado un id
  * @param {string} id - id del estudiante a buscar
  * @returns estudiante con el id ingresado
  */
  getEstudiante(id) {
    return this.http.get<Estudiante>(`${this.domain}/api/estudiantes/${id}`)
      .map(res => res);
  }

  /**
    * Método encargado de consultar las materias de un estudiante
    * @param {string} idEstudiante - id del estudiante
    * @returns Materias del estudiante ingresado
    */
  getMateriasEstudiante(idEstudiante) {
    return this.http.get<Materia[]>(`${this.domain}/api/estudiantes/consultarMaterias/${idEstudiante}`)
      .map(res => res);
  }
}
