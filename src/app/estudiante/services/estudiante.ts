import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class Estudiante {
  api: string = "http://localhost:3000/api/estudiantes";

  constructor(private http:HttpClient) {

  }

  obtenerListado()
  {
    return this.http.get(this.api);
  }
}