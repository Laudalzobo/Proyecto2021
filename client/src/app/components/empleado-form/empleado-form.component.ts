import { Component, HostBinding, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import {NgForm} from '@angular/forms';

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
  
  nombre: '',
  apellido: '',
  dni: undefined,
  legajo: undefined,
  mail: '',
  telefono: undefined,

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
   location.reload();
  }

}
