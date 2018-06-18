/**
 * @description Servicio encargado de la gestión de materias del servidor
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tema } from '../models/Tema';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class MateriaService {
  domain = environment.api_url;
  constructor(private http: HttpClient) { }

}
