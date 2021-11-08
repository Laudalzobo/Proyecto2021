import { Component, OnInit } from '@angular/core';
import { ContadorAsistenciaService } from 'src/app/services/contador-asistencia.service';
import { FilterPipe } from 'src/app/filter.pipe';
@Component({
  selector: 'app-asistenciaxpersona',
  templateUrl: './asistenciaxpersona.component.html',
  styleUrls: ['./asistenciaxpersona.component.css']
})
export class AsistenciaxpersonaComponent implements OnInit {
  empleados : any = [];
  fechaHoy:Date= new Date();

  constructor(private contadorAsistenciaXPersona: ContadorAsistenciaService ) { }
  filterPost = '';
  ngOnInit(): void {
    this.contadorAsistenciaXPersona.getAsistencia().subscribe(
      res => {
        this.empleados = res;
      }
    )
  }

}
