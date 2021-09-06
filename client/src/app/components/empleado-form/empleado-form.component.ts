import { Component, HostBinding, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

import { EmpleadoService } from 'src/app/services/empleado.service';
@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {
@HostBinding('class') classes = "row";

constructor(private empleadoService: EmpleadoService) { }
empleado: Empleado = {
  id: 0,
  nombre: '',
  apellido: '',
  dni: 0,
  legajo: 0,
  mail: '',
  telefono: 0,

  created_at: new Date()
  
};
  ngOnInit(): void {}

  guardarEmpleado() {
   delete this.empleado.created_at;
    delete this.empleado.id; 
   this.empleadoService.saveEmpleado(this.empleado)
   .subscribe(
     res => {
       console.log(res);
     },
     err => console.log(err)
   )
  }

}
