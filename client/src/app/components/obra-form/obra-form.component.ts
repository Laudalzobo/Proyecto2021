import { Component, HostBinding, OnInit } from '@angular/core';
import { Obra } from 'src/app/models/obra';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { ObrasService } from 'src/app/services/obras.service';
import { ObrasempleadoService } from 'src/app/services/obrasempleado.service';
import {NgForm} from '@angular/forms';
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
 provincias: any;
 empleados:any;
 empleadosAgregados:any=[];
 empeadoSeleccionado:any;
  @HostBinding('class') classes = "row";

  constructor(private obrasService: ObrasService,private empleadoService:EmpleadoService,private obra_empleadoSerivce:ObrasempleadoService) {
    this.datos = ["Buenos Aires"];
    this.provincias = ["Ayacucho", 
                      "Azul",
                      "Bahia Blanca",
                      "Balcarce", 
                      "Berisso", 
                      "Brandsen", 
                      "Campana",
                      "Dolores",
                      "Ensenada",
                      "General belgrano",
                      "La PLata",
                      "Quilmes",
                      "Tigre",
                      "Zarate" ]
   }
  
  obra: Obra ={
    id: 0,
    nombre: '',
    calle: '',
    altura: undefined,
    localidad: '',
    provincia: '',
    fechaInicio: '',
    
  }

 

  ngOnInit(): void {
    this.getEmpleados();

  }

capturar() {
  this.verSeleccion = this.opcionSeleccionado; 
}

capturarLocalidad() {
  this.verSeleccion = this.opcionSeleccionado; 

}

  guardarObra() {
 
    delete this.obra.id; 
   this.obrasService.saveObra(this.obra)
   .subscribe(
     (res:any) => {
      console.log(res);
       let idObraNueva=res.result.insertId;
       console.log(idObraNueva);
       this.empleadosAgregados.forEach((element:any) => {
         let obraEmpleado={
          idEmpleado:element.id,
          idObra:idObraNueva
         }
         this.obra_empleadoSerivce.saveObraEmpleado(obraEmpleado).subscribe((res:any)=>{
           console.log(res);
         });
       });

    
     },
     err => console.log(err)
   )
  //  location.reload();
  }

  getEmpleados(){
    this.empleadoService.getEmpleados().subscribe((data:any)=>{
      console.log(data);
      this.empleados=data;
    })
  }

  empleadoSeteado(e:any){
    this.empeadoSeleccionado=e.target.value;
  }

  agregarEmpleado(){
    this.empleadosAgregados.push(this.empleados[this.empeadoSeleccionado]);
  }

}
