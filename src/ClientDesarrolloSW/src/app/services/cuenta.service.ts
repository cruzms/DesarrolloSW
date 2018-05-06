import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cuenta } from '../models/Cuenta';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class CuentaService {
  domain: string = environment.api_url;
  constructor(private http: HttpClient) { }

  getCuenta() {
    return this.http.get<Cuenta[]>(`${this.domain}/api/cuentas`)
      .map(res => res);
  }

  addCuenta(nuevaCuenta: Cuenta) {
    return this.http.post<Cuenta>(`${this.domain}/api/cuentas`, nuevaCuenta)
      .map(res => res);
  }
  deleteCuenta(id) {
    return this.http.delete(`${this.domain}/api/cuentas/${id}`)
      .map(res => res);
  }
  updateCuenta(ActualizarCuenta: Cuenta) {
    return this.http.put(`${this.domain}/api/cuentas/${ActualizarCuenta._id}`, ActualizarCuenta)
      .map(res => res);
  }
}
