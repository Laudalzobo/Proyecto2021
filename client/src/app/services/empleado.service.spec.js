"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var empleado_service_1 = require("./empleado.service");
describe('EmpleadoService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(empleado_service_1.EmpleadoService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
