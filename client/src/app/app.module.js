"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var empleado_form_component_1 = require("./components/empleado-form/empleado-form.component");
var empleado_list_component_1 = require("./components/empleado-list/empleado-list.component");
var inicio_sesion_component_1 = require("./components/inicio-sesion/inicio-sesion.component");
var navigation_component_1 = require("./components/navigation/navigation.component");
var principal_component_1 = require("./components/principal/principal.component");
var empleado_service_1 = require("./services/empleado.service");
var routes = [
    { path: 'InicioSesion', component: inicio_sesion_component_1.InicioSesionComponent },
    { path: '', component: principal_component_1.PrincipalComponent },
    { path: 'ListaEmpleados', component: empleado_list_component_1.EmpleadoListComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                empleado_form_component_1.EmpleadoFormComponent,
                empleado_list_component_1.EmpleadoListComponent,
                navigation_component_1.NavigationComponent,
                inicio_sesion_component_1.InicioSesionComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot(routes),
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [
                empleado_service_1.EmpleadoService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
