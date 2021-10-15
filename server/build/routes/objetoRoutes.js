"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const objetosController_1 = require("../controllers/objetosController");
class ObjetosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', objetosController_1.objetoController.list);
        this.router.post('/', objetosController_1.objetoController.create);
        this.router.delete('/:id', objetosController_1.objetoController.delete);
        this.router.put('/:id', objetosController_1.objetoController.update);
        this.router.get('/:id', objetosController_1.objetoController.getOne);
    }
}
const objetosRoutes = new ObjetosRoutes();
exports.default = objetosRoutes.router;
