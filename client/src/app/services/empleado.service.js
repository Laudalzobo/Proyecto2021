"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoService = void 0;
var core_1 = require("@angular/core");
var EmpleadoService = /** @class */ (function () {
    function EmpleadoService(http) {
        this.http = http;
        this.API_URI = "http://localhosot:3000/api";
    }
    EmpleadoService.prototype.getEmpleados = function () {
        return this.http.get('http://localhost:3000/api/objeto');
    };
    EmpleadoService.prototype.getEmpleado = function (id) {
        return this.http.get('http://localhost:3000/api/objeto${id}');
    };
    EmpleadoService.prototype.saveEmpleado = function (empleado) {
        return this.http.post('http://localhost:3000/api/objeto', empleado);
    };
    EmpleadoService.prototype.deleteEmpleado = function (id) {
        return this.http.delete('http://localhost:3000/api/objeto/{id}');
    };
    EmpleadoService.prototype.updateEmpleado = function (id, updatedEmpleado) {
        return this.http.put('http://localhost:3000/api/objeto/${id}', updatedEmpleado);
    };
    EmpleadoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], EmpleadoService);
    return EmpleadoService;
}());
exports.EmpleadoService = EmpleadoService;
