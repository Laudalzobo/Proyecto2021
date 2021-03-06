"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contadorasistenciaController_1 = __importDefault(require("../controllers/contadorasistenciaController"));
class ContadorAsistenciaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', contadorasistenciaController_1.default.list);
        this.router.post('/', contadorasistenciaController_1.default.create);
        this.router.delete('/:id', contadorasistenciaController_1.default.delete);
        this.router.put('/:id/:presente', contadorasistenciaController_1.default.update);
        this.router.get('/:id', contadorasistenciaController_1.default.getOne);
    }
}
const contadorasistenciaRoutes = new ContadorAsistenciaRoutes();
exports.default = contadorasistenciaRoutes.router;
