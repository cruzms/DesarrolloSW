import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Computador } from "../models/Computador";
import 'rxjs/Rx';

@Injectable()
export class ComputadorService {
  domain: string = "http://localhost:3000/api/computadores";
  constructor(private http: HttpClient) { }

  getComputadores() {
    return this.http.get<Computador[]>(this.domain)
      .map(res => res);
  }

  addComputador(computador){
    return this.http.post(this.domain, computador).map(res => res);
  }

  updateComputador(computador){
    return this.http.put(`${this.domain}/${computador.id}`, computador).map(res => res);
  }
  
  deleteComputador(id){
    return this.http.delete(`${this.domain}/${id}`).map(res => res);
  }
}
