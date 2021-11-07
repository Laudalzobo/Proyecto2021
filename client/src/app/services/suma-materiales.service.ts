import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumaMaterialesService {
  constructor(private http: HttpClient) { }
  getTotalMateriales(){
    return this.http.get(`http://localhost:3000/api/sumamateriales`);
  }
}