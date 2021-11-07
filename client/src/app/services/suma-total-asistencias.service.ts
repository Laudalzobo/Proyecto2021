import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumaTotalAsistenciasService {

  constructor(private http: HttpClient) { }
  getSumaTotalAsistencias(){
    return this.http.get(`http://localhost:3000/api/sumatotalasistencias`);
  }
}