"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoFormComponent = void 0;
var core_1 = require("@angular/core");
var EmpleadoFormComponent = /** @class */ (function () {
    function EmpleadoFormComponent() {
    }
    EmpleadoFormComponent.prototype.ngOnInit = function () {
    };
    EmpleadoFormComponent = __decorate([
        core_1.Component({
            selector: 'app-empleado-form',
            templateUrl: './empleado-form.component.html',
            styleUrls: ['./empleado-form.component.css']
        })
    ], EmpleadoFormComponent);
    return EmpleadoFormComponent;
}());
exports.EmpleadoFormComponent = EmpleadoFormComponent;
