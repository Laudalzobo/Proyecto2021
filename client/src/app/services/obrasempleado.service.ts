import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';
import { ObraEmpleado } from '../models/obraEmpleado';

@Injectable({
  providedIn: 'root'
})
export class ObrasempleadoService {

  API_URI = "http://localhosot:3000/api"

  constructor(private http: HttpClient) { }

  getEmpleados(id: string) {
    return this.http.get(`http://localhost:3000/api/obrasempleados/empleados/${id}`);
  }

  getObrasEmpleado(){
    return this.http.get(`http://localhost:3000/api/obrasempleados`);
  }

  getObraEmpleado(id: string){
    return this.http.get(`http://localhost:3000/api/obrasempleados${id}`);
  }

  saveObraEmpleado(obraempleado: ObraEmpleado){
    return this.http.post(`http://localhost:3000/api/obrasempleados`,obraempleado);
  }

  deleteObraEmpleado( id: string){
    return this.http.delete(`http://localhost:3000/api/obrasempleados/${id}`);
  }

  
 
  
}
