import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Empleado } from '../models/empleado'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  API_URI = "http://localhosot:3000/api"

  constructor(private http: HttpClient) { }

  getEmpleados(){
    return this.http.get('http://localhost:3000/api/objeto');
  }

  getEmpleado(id: string){
    return this.http.get('http://localhost:3000/api/objeto${id}');
  }

  saveEmpleado(empleado: Empleado){
    return this.http.post('http://localhost:3000/api/objeto',empleado);
  }

  deleteEmpleado( id: string){
    return this.http.delete('http://localhost:3000/api/objeto/{id}');
  }

  updateEmpleado(id: string, updatedEmpleado: Empleado): Observable<Empleado>{
    return this.http.put('http://localhost:3000/api/objeto/${id}', updatedEmpleado);
  }
}
