import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class ArchivoService {
  domain = environment.api_url;
  constructor(private http: HttpClient) { }

  SubirArchivo(archivo) {
    return this.http.post(`${this.domain}/api/archivos/upload`, archivo)
    .map((res: Response) => res)
    .catch((err: Response) => Observable.throw(err));
  }
}
