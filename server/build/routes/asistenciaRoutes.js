"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asistenciaController_1 = __importDefault(require("../controllers/asistenciaController"));
class AsistenciaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:idObra/:fecha', asistenciaController_1.default.list);
        this.router.post('/', asistenciaController_1.default.create);
        this.router.delete('/:id', asistenciaController_1.default.delete);
        this.router.put('/:id/:presente', asistenciaController_1.default.update);
        this.router.get('/:id', asistenciaController_1.default.getOne);
    }
}
const asistenciaRoutes = new AsistenciaRoutes();
exports.default = asistenciaRoutes.router;
