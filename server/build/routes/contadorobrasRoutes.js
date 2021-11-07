"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contadorobrasController_1 = __importDefault(require("../controllers/contadorobrasController"));
class ContadorObrasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', contadorobrasController_1.default.list);
        this.router.post('/', contadorobrasController_1.default.create);
        this.router.delete('/:id', contadorobrasController_1.default.delete);
        this.router.put('/:id/:presente', contadorobrasController_1.default.update);
        this.router.get('/:id', contadorobrasController_1.default.getOne);
    }
}
const contadorObrasRoutes = new ContadorObrasRoutes();
exports.default = contadorObrasRoutes.router;
