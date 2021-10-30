import { Component, OnInit } from '@angular/core';
import { ObrasService } from 'src/app/services/obras.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-obra-list',
  templateUrl: './obra-list.component.html',
  styleUrls: ['./obra-list.component.css']
})
export class ObraListComponent implements OnInit {
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
    this.router.navigate([`/vistaExtendida/${id}`]);
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