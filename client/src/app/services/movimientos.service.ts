import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movimientos } from '../models/movimientos';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getMovimientos(idObra:string) {
    return this.http.get(`http://localhost:3000/api/movimientos/movimientos/${idObra}`);
  }

  getMovimiento(id:string){
    return this.http.get(`http://localhost:3000/api/movimientos/${id}`);

  }

  saveMovimiento(movimiento:Movimientos){
    return this.http.post(`http://localhost:3000/api/movimientos`, movimiento);
 
  }

  deleteMovimiento(id:string){
    return this.http.delete(`http://localhost:3000/api/movimientos/${id}`);
  }

  updateMovimiento(id:string, updatedMovimiento:Movimientos): Observable<any>{
    return this.http.put(`http://localhost:3000/api/movimientos/${id}`, updatedMovimiento);
  }
}
