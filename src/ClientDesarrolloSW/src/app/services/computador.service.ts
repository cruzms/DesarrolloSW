import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Computador } from "../models/Computador";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ComputadorService {
  domain: string = "http://localhost:3000/api/computadores";
  constructor(private http: HttpClient) { }

  getComputadores() {
    return this.http.get<Computador[]>(this.domain)
      .map(res => res);
  }

  addComputador(computador) {
    return this.http.post(this.domain, computador)
      .map((res: Response) => {
        return res;
      })
      .catch((err: Response) => {
        return Observable.throw(err);
      });
  }

  updateComputador(computador) {
    return this.http.put(`${this.domain}/${computador._id}`, computador)
      .map((res: Response) => res)
      .catch((err: Response) => Observable.throw(err));
  }

  deleteComputador(id) {
    return this.http.delete(`${this.domain}/${id}`)
      .map((res: Response) => res)
      .catch((err: Response) => Observable.throw(err));
  }
}
