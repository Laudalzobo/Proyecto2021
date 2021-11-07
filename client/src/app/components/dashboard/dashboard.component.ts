import { Component, OnInit } from '@angular/core';
import { SumaTotalAsistenciasService } from 'src/app/services/suma-total-asistencias.service';
import { SumaEmpleadosService } from 'src/app/services/suma-empleados.service';
import { SumaObrasService } from 'src/app/services/suma-obras.service';
import { SumaMaterialesService } from 'src/app/services/suma-materiales.service';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  suma: any = [];
  sumaempleados: any = [];
  sumaobras: any = [];
  sumamateriales: any = [];
  presupuesto: any = [];
  constructor(private presupuestoService: PresupuestoService, private sumaTotalService : SumaTotalAsistenciasService, private sumaEmpleadoService: SumaEmpleadosService, private sumaObrasService: SumaObrasService, private sumaMaterialesService: SumaMaterialesService) { }

  ngOnInit(): void {
    this.sumaTotalService.getSumaTotalAsistencias().subscribe(
      res => {
        this.suma = res;
        console.log(res);
      }
    )
      this.sumaEmpleadoService.getTotalEmpleados().subscribe(
        res => {
          this.sumaempleados = res;
          console.log(res);
        }
      )
    
      this.sumaObrasService.getTotalObras().subscribe(
        res =>{
        this.sumaobras = res;
        console.log(res);
        }
      )

      this.sumaMaterialesService.getTotalMateriales().subscribe(
        res =>{
        this.sumamateriales = res;
        console.log(res);
        }
      )

      this.presupuestoService.getPresupuesto().subscribe(
        res =>{
        this.presupuesto = res;
        console.log(res);
        }
      )
    }
  }
