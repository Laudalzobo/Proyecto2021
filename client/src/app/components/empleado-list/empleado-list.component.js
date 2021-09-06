"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoListComponent = void 0;
var core_1 = require("@angular/core");
var EmpleadoListComponent = /** @class */ (function () {
    function EmpleadoListComponent(empleadoService) {
        this.empleadoService = empleadoService;
        this.empleados = [];
    }
    EmpleadoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.empleadoService.getEmpleados().subscribe(function (res) {
            _this.empleados = res;
        });
    };
    EmpleadoListComponent = __decorate([
        core_1.Component({
            selector: 'app-empleado-list',
            templateUrl: './empleado-list.component.html',
            styleUrls: ['./empleado-list.component.css']
        })
    ], EmpleadoListComponent);
    return EmpleadoListComponent;
}());
exports.EmpleadoListComponent = EmpleadoListComponent;
