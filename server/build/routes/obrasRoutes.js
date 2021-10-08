"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const obrasController_1 = __importDefault(require("../controllers/obrasController"));
class ObrasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', obrasController_1.default.list);
        this.router.post('/', obrasController_1.default.create);
        this.router.delete('/:id', obrasController_1.default.delete);
        this.router.put('/:id', obrasController_1.default.update);
        this.router.get('/:id', obrasController_1.default.getOne);
    }
}
const obrasRoutes = new ObrasRoutes();
exports.default = obrasRoutes.router;
