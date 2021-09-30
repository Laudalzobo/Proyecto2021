import { Component, OnInit } from '@angular/core';
import { ObrasService } from 'src/app/services/obras.service';
import { ObrasempleadoService } from 'src/app/services/obrasempleado.service';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-vista-extendida',
  templateUrl: './vista-extendida.component.html',
  styleUrls: ['./vista-extendida.component.css']
})
export class VistaExtendidaComponent implements OnInit {
  obras: any = [];
  empleados: any = [];
  constructor(private obrasService: ObrasService,private route:ActivatedRoute,private empleadoService:EmpleadoService,private obra_empleadoSerivce:ObrasempleadoService) { }

  ngOnInit(): void {
    
    let idObra = this.route.snapshot.paramMap.get('id') as string;
    this.obrasService.getObra(idObra).subscribe((data:any)=>{
      this.obras=data.obra;
      console.log(data.obra);

      this.obra_empleadoSerivce.getEmpleados(idObra).subscribe((data:any)=>{
        this.empleados = data.empleados;
        console.log(data);

    })
  }
 

    )}
}
