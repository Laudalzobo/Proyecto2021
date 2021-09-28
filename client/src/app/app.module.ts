import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PrincipalComponent } from './components/principal/principal.component';

import { EmpleadoService } from './services/empleado.service';
import { ObraFormComponent } from './components/obra-form/obra-form.component';
import { ObrasService } from './services/obras.service';
import { ObraListComponent } from './components/obra-list/obra-list.component';
import { VistaEncargadosComponent } from './components/vista-encargados/vista-encargados.component';
import { VistaExtendidaComponent } from './components/vista-extendida/vista-extendida.component';

 

const routes: Routes = [
  
  {path: 'InicioSesion', component: ObraListComponent},
  {path: '', component: PrincipalComponent},  
  {path: 'ListaEmpleados', component: EmpleadoListComponent},
  {path: 'CreaEmpleados', component: EmpleadoFormComponent},
  {path: 'ListaObras', component: ObraListComponent},
  {path: 'CrearObra', component: ObraFormComponent},  
  {path: 'vistaEncargados', component: VistaEncargadosComponent},  
  {path: 'vistaExtendida/:id', component:  VistaExtendidaComponent},  


 
]



@NgModule({
  declarations: [
    AppComponent,
    EmpleadoFormComponent,
    EmpleadoListComponent,
    NavigationComponent,
    InicioSesionComponent,
    ObraFormComponent,
    ObraListComponent,
    VistaEncargadosComponent,
    VistaExtendidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule],
  providers: [
    EmpleadoService,
    ObrasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
