import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Asistencia } from '../models/asistencia'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private http: HttpClient) { }
  getAsistencia(idObra:number,fecha:string){
    return this.http.get(`http://localhost:3000/api/asistencia/${idObra}/${fecha}`);
  }


  saveAsistencia(asistencia: Asistencia){
    return this.http.post(`http://localhost:3000/api/asistencia`,asistencia);
  }

  deleteAsistencia( id: string){
    return this.http.delete(`http://localhost:3000/api/asistencia/${id}`);
  }

  updateAsistencia(id:number,presente:boolean){
    return this.http.put(`http://localhost:3000/api/asistencia/${id}/${presente}`,"");
  }
}
