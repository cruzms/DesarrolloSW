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
}
