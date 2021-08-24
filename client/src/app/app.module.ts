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


const routes: Routes = [
  {path: '', component: NavigationComponent},
  {path: 'InicioSesion', component: InicioSesionComponent},
]



@NgModule({
  declarations: [
    AppComponent,
    EmpleadoFormComponent,
    EmpleadoListComponent,
    NavigationComponent,
    InicioSesionComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
