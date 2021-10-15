import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaterialesService {

  //API_URI = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  getMateriales(){
    return this.http.get(`http://localhost:3000/api/material`)
  }
}
