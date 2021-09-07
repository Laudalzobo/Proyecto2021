import { Component, HostBinding, OnInit } from '@angular/core';
import { Obra } from 'src/app/models/obra';
import { ObrasService } from 'src/app/services/obras.service';
@Component({
  selector: 'app-obra-form',
  templateUrl: './obra-form.component.html',
  styleUrls: ['./obra-form.component.css']
})
export class ObraFormComponent implements OnInit {
  
  // Seleccionamos o iniciamos el valor '0' del <select>
  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';
 datos: any;
  @HostBinding('class') classes = "row";

  constructor(private obrasService: ObrasService) {
    this.datos = ["Buenos Aires","Entre rios"];
   }
  
  obra: Obra ={
    id: 0,
    nombre: '',
    altura: 0,
    localidad: '',
    provincia: '',
    fechaInicio: '',
    
  }

 

  ngOnInit(): void {}

capturar() {
  this.verSeleccion = this.opcionSeleccionado; 
}


  guardarObra() {
 
    delete this.obra.id; 
   this.obrasService.saveObra(this.obra)
   .subscribe(
     res => {
       console.log(res);
     },
     err => console.log(err)
   )
  }

}
