"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sumatotalController_1 = __importDefault(require("../controllers/sumatotalController"));
class SumaAsistenciaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', sumatotalController_1.default.list);
        this.router.post('/', sumatotalController_1.default.create);
        this.router.delete('/:id', sumatotalController_1.default.delete);
        this.router.put('/:id/:presente', sumatotalController_1.default.update);
        this.router.get('/:id', sumatotalController_1.default.getOne);
    }
}
const sumaAsistenciaRoutes = new SumaAsistenciaRoutes();
exports.default = sumaAsistenciaRoutes.router;
