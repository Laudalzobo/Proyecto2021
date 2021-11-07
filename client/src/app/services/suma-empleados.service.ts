import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumaEmpleadosService {
  constructor(private http: HttpClient) { }
  getTotalEmpleados(){
    return this.http.get(`http://localhost:3000/api/sumaempleados`);
  }
}