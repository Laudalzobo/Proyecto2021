import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Asistencia } from '../models/asistencia'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorAsistenciaService {

  constructor(private http: HttpClient) { }
  getAsistencia(){
    return this.http.get(`http://localhost:3000/api/contadorasistencia`);
  }


  
}
