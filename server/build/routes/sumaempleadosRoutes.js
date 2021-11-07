"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sumaempleadosController_1 = __importDefault(require("../controllers/sumaempleadosController"));
class SumaEmpleadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', sumaempleadosController_1.default.list);
        this.router.post('/', sumaempleadosController_1.default.create);
        this.router.delete('/:id', sumaempleadosController_1.default.delete);
        this.router.put('/:id/:presente', sumaempleadosController_1.default.update);
        this.router.get('/:id', sumaempleadosController_1.default.getOne);
    }
}
const sumaEmpleadosRoutes = new SumaEmpleadosRoutes();
exports.default = sumaEmpleadosRoutes.router;
