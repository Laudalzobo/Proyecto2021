import { Component, OnInit } from '@angular/core';
import { ObrasService } from 'src/app/services/obras.service';
import { ObrasempleadoService } from 'src/app/services/obrasempleado.service';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-vista-extendida',
  templateUrl: './vista-extendida.component.html',
  styleUrls: ['./vista-extendida.component.css']
})
export class VistaExtendidaComponent implements OnInit {
  obras: any = [];
  empleados: any = [];

public previsualizacion!: string;
public archivos: any = [];


  constructor(private obrasService: ObrasService,private route:ActivatedRoute,private empleadoService:EmpleadoService,private obra_empleadoSerivce:ObrasempleadoService, private sanitizer: DomSanitizer) { }




  

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

    capturarFile(event: any): any {
      const archivoCapturado = event.target.files[0]
      this.extraerBase64(archivoCapturado).then((imagen: any) =>{
        this.previsualizacion = imagen.base;
        console.log(imagen);
        })
      /* this.archivos.push(archivoCapturado) */
 /*  console.log(event.target.files); */
    }

extraerBase64 = async ($event: any) => new Promise((resolve) => {
  try {
    const unsafeImg = window.URL.createObjectURL($event);
    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
    const reader = new FileReader();
    reader.readAsDataURL($event);
    reader.onload = () => {
      resolve({
        blob : $event,
        image,
        base: reader.result
      });
    };
    reader.onerror = error => {
      resolve({
        blob: $event,
        image,
        base: null
      });
    };

  } catch (e) {
    return null;
  }
})


/* subirArchivo(): any {
try {
  const formularioDeDatos = new FormData();
  this.archivos.array.forEach((archivo: string | Blob) => {
    console.log(archivo);
    formularioDeDatos.append('files', archivo)
    
  })
  this.rest.post(`http://localhost:4200/vistaExtendida/`, formularioDeDatos)
  .subscribe (
    res => {
      console.log('Respuesta del servidor', res);
    })
} catch (e) {
  console.log('ERROR', e);
} */

/* } */

}

