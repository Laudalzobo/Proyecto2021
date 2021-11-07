"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sumamaterialesController_1 = __importDefault(require("../controllers/sumamaterialesController"));
class SumaMaterialRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', sumamaterialesController_1.default.list);
        this.router.post('/', sumamaterialesController_1.default.create);
        this.router.delete('/:id', sumamaterialesController_1.default.delete);
        this.router.put('/:id/:presente', sumamaterialesController_1.default.update);
        this.router.get('/:id', sumamaterialesController_1.default.getOne);
    }
}
const sumaMaterialRoutes = new SumaMaterialRoutes();
exports.default = sumaMaterialRoutes.router;
