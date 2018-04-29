import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carro } from "../Carro"
import "rxjs/Rx";

@Injectable()
export class CarroService {
  domain: string = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getCarros(){
    return this.http.get<Carro[]>(`${this.domain}/api/carros`)
    .map(res => res);
  }

  addCarro(nuevoCarro: Carro){
    return this.http.post<Carro>(`${this.domain}/api/carros`,nuevoCarro)
    .map(res => res);
  }
  deleteCarro(id){
    return this.http.delete(`${this.domain}/api/carros/${id}`)
    .map(res => res); 
  }
  updateCarro(ActualizarCarro){
    return this.http.put(`${this.domain}/api/carros/${ActualizarCarro._id}`,ActualizarCarro)
    .map(res => res);
  }
}
