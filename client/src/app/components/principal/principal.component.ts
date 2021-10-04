import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }


  primeraPagina(){
    var usuario = (document.getElementById("usuario") as HTMLTextAreaElement).value;
    console.log(usuario)

    var contraseña = (document.getElementById("contraseña") as HTMLTextAreaElement).value;
    if ( usuario == "secretaria@gmail.com" && contraseña == "123123") {
      this.router.navigate(['/InicioSesion']);
    } 
    else if ( usuario == "encargado@gmail.com" && contraseña == "123123") {
        this.router.navigate(['/vistaEncargados']);
    }
    else {
      alert('Usuario o contraseña incorrectos')
    }
  }

}
