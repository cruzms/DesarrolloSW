import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Computador } from "../models/Computador";
import 'rxjs/Rx';

@Injectable()
export class ComputadorService {
  domain: string = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getComputadores() {
    return this.http.get<Computador[]>(`${this.domain}/api/computadores`)
      .map(res => res);
  }
}
