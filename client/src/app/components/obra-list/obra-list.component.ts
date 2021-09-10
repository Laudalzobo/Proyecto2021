import { Component, OnInit } from '@angular/core';
import { ObrasService } from 'src/app/services/obras.service';
@Component({
  selector: 'app-obra-list',
  templateUrl: './obra-list.component.html',
  styleUrls: ['./obra-list.component.css']
})
export class ObraListComponent implements OnInit {
  obras : any = [];

  constructor(private obrasService: ObrasService) { }

  ngOnInit(): void {
    this.obrasService.getObras().subscribe(
      res => {
        this.obras = res;
      }
    )
  }

  eliminarObra(id: string){
    this.obrasService.deleteObra(id).subscribe(
      res => {
        console.log(res)
      
      },
      err => console.log(err)
    )
     location.reload();
   }

}