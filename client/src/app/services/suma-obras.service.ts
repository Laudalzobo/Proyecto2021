import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumaObrasService {
  constructor(private http: HttpClient) { }
  getTotalObras(){
    return this.http.get(`http://localhost:3000/api/sumaobras`);
  }
}