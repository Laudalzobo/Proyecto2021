import { Component, OnInit, Input } from '@angular/core';
import { MovimientosService } from 'src/app/services/movimientos.service';
import { MaterialesService } from 'src/app/services/materiales.service';
import { Movimientos } from 'src/app/models/movimientos';
import { Router , ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movimientos-form',
  templateUrl: './movimientos-form.component.html',
  styleUrls: ['./movimientos-form.component.css']
})
export class MovimientosFormComponent implements OnInit {
  idObra: string|null ='';
  materiales:any =[];//= [{"id":1,"tipo":"Cemento","cantidad":2},{"id":2,"tipo":"Arena","cantidad":4},{"id":3,"tipo":"Cal","cantidad":3} ];
  //materiales: any;
  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';
  //material_seleccionado: any;
  mat:any =0;
  material_seteado=undefined;
  constructor(private movimientosService: MovimientosService, private materialesService: MaterialesService, private router: Router, private activatedroute: ActivatedRoute, private http:HttpClient) { }
  movimiento: Movimientos = {
    
    cantidad: undefined,
    precioUnitario: undefined,
    idMaterial:undefined,
    idObra:'',
    precioTotal:undefined 
    
    /*created_at: new Date()*/
    
  };
    ngOnInit(): void {
        this.idObra= this.activatedroute.snapshot.paramMap.get('idObra');
        this.materialesService.getMateriales().subscribe(
          res => {
            this.materiales = res;
          }
        )
    
        //this.materiales= this.http.get('http:localhost:3000/api/material')
      
       // this.materiales=this.materialesService.getMateriales()
      }
    
   /* getMateriales(){
        this.materialesService.getMateriales().subscribe(
          res => {
            this.materiales= res
            console.log(this.materiales)
          }
        )
      }
  
    /*  getMateriales(){
        this.materialesService.getMateriales().subscribe((data:any)=>{
          console.log(data);
          this.materiales=data;
        })
      }*/
     /* getMateriales(){
        this.materiales= this.http.get('http:localhost:3000/api/material')
      }*/
    
      materialSeteado(e:any){
        this.material_seteado=e.target.value;
        console.log(this.material_seteado)
        
      }
     /* setIdMaterial(){
        for (let i of this.materiales){
          if (this.materiales.tipo=this.material_seteado)
          {
            let mat=this.materiales.id
          }
        }
        return this.mat
      }*/
    guardarMovimiento() {
     this.movimiento.idObra=this.activatedroute.snapshot.paramMap.get('idObra');
     this.movimiento.precioTotal=3*10;
     this.movimiento.idMaterial=this.material_seteado;
      delete this.movimiento.id; 
     this.movimientosService.saveMovimiento(this.movimiento)
     
     .subscribe(
       res => {
         console.log(res);
       },
       err => console.log(err)
     )
     //this.router.navigate([`/vistaExtendida/${this.idObra}`]);
     location.reload();
    }

    
    
  }