import { Component, OnInit } from '@angular/core';
import { ObrasService } from 'src/app/services/obras.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-extendida',
  templateUrl: './vista-extendida.component.html',
  styleUrls: ['./vista-extendida.component.css']
})
export class VistaExtendidaComponent implements OnInit {
  obras: any = [];
  constructor(private obrasService: ObrasService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    let idObra = this.route.snapshot.paramMap.get('id') as string;
    this.obrasService.getObra(idObra).subscribe((data:any)=>{
      this.obras=data.obra;
    })
  }
 

}
