"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movimientosController_1 = require("../controllers/movimientosController");
class MovimientosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', movimientosController_1.movimientosControllerController.list);
        this.router.post('/', movimientosController_1.movimientosControllerController.create);
        this.router.delete('/:id', movimientosController_1.movimientosControllerController.delete);
        this.router.put('/:id', movimientosController_1.movimientosControllerController.update);
        this.router.get('/:id', movimientosController_1.movimientosControllerController.getOne);
        this.router.get('/movimientos/:id', movimientosController_1.movimientosControllerController.getOneMovimientos);
    }
}
const movimientosRoutes = new MovimientosRoutes();
exports.default = movimientosRoutes.router;
