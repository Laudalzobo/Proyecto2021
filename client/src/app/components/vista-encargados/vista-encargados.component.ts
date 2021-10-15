import { Component, OnInit } from '@angular/core';
import { ObrasService } from 'src/app/services/obras.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vista-encargados',
  templateUrl: './vista-encargados.component.html',
  styleUrls: ['./vista-encargados.component.css']
})
export class VistaEncargadosComponent implements OnInit {
  obras : any = [];

  constructor(private obrasService: ObrasService, private router: Router) { }

  ngOnInit(): void {
    this.obrasService.getObras().subscribe(
      res => {
        this.obras = res;
      }
    )
  }
  verMas(id:string) {
  this.obrasService.getObra(id).subscribe(
    res => {
      console.log(res)
    },
    err => console.log(err)
  )
  localStorage.setItem('IdObra', JSON.stringify(id));
  this.router.navigate([`/vistaExtendidaEncargado/${id}`]);
}

}