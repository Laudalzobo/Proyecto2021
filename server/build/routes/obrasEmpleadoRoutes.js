"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const obrasEmpleadoController_1 = require("../controllers/obrasEmpleadoController");
class ObrasEmpleadoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', obrasEmpleadoController_1.obrasEmpleadoControllerController.list);
        this.router.post('/', obrasEmpleadoController_1.obrasEmpleadoControllerController.create);
        this.router.delete('/:id', obrasEmpleadoController_1.obrasEmpleadoControllerController.delete);
        this.router.put('/:id', obrasEmpleadoController_1.obrasEmpleadoControllerController.update);
        this.router.get('/:id', obrasEmpleadoController_1.obrasEmpleadoControllerController.getOne);
    }
}
const obrasEmpleadoRoutes = new ObrasEmpleadoRoutes();
exports.default = obrasEmpleadoRoutes.router;
