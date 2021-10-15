import { Component, HostBinding, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';

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


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  async guardarEmpleado() {
   delete this.empleado.created_at;
    delete this.empleado.id; 
   this.empleadoService.saveEmpleado(this.empleado)
   .subscribe(
     res => {
       console.log(res);
     },
     err => console.log(err)
   )
  
   Swal.fire('', 'El empleado ha sido creado con éxito', 'success');
   await this.delay(4000);
   location.reload();
  }

}
