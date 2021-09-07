import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Obra } from '../models/obra'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ObrasService {

  API_URI = "http://localhosot:3000/api"

  constructor(private http: HttpClient) { }

  getObras(){
    return this.http.get(`http://localhost:3000/api/obras`);
  }

  getObra(id: string){
    return this.http.get(`http://localhost:3000/api/obras${id}`);
  }

  saveObra(obra: Obra){
    return this.http.post(`http://localhost:3000/api/obras`,obra);
  }

  deleteObra( id: string){
    return this.http.delete(`http://localhost:3000/api/obras/${id}`);
  }

  updateObra(id: string, updatedObra: Obra): Observable<Obra>{
    return this.http.put('http://localhost:3000/api/obras/${id}', updatedObra);
  }
}
