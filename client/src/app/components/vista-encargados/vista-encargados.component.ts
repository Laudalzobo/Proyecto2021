import { Component, OnInit } from '@angular/core';
import { ObrasService } from 'src/app/services/obras.service';

@Component({
  selector: 'app-vista-encargados',
  templateUrl: './vista-encargados.component.html',
  styleUrls: ['./vista-encargados.component.css']
})
export class VistaEncargadosComponent implements OnInit {
  obras : any = [];

  constructor(private obrasService: ObrasService) { }

  ngOnInit(): void {
    this.obrasService.getObras().subscribe(
      res => {
        this.obras = res;
      }
    )
  }

}