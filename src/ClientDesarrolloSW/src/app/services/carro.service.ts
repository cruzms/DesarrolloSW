/**
 * @description Servicio encargado de traer desde el servidor la información solicitada
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carro } from '../models/Carro';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class CarroService {
  domain = environment.api_url;
  constructor(private http: HttpClient) { }

  /**
  * Método encargado de consultar los carros que hay en el servidor
  * @returns Lista de carros
  */
  getCarros() {
    return this.http.get<Carro[]>(`${this.domain}/api/carros`)
    .map(res => res);
  }

  /**
  * Método encargado de adicionar un nuevo carro en el servidor
  * @param {Carro} nuevoCarro - carro que se agregará al servidor
  * @returns Carro adicionado
  */
  addCarro(nuevoCarro: Carro) {
    return this.http.post<Carro>(`${this.domain}/api/carros`, nuevoCarro)
    .map(res => res);
  }

  /**
  * Método encargado de eliminar un carro en el servidor
  * @param {Carro} nuevoCarro - carro que se agregará al servidor
  * @returns Respuesta del servidor
  */
  deleteCarro(id) {
    return this.http.delete(`${this.domain}/api/carros/${id}`)
    .map(res => res);
  }

  /**
  * Método encargado de modificar un carro del servidor
  * @param {Carro} nuevoCarro - carro que se modificará en el servidor
  * @returns Respuesta del servidor
  */
  updateCarro(ActualizarCarro: Carro) {
    return this.http.put(`${this.domain}/api/carros/${ActualizarCarro._id}`, ActualizarCarro)
    .map(res => res);
  }
}
