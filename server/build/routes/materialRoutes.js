"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const materialController_1 = require("../controllers/materialController");
class MaterialRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', materialController_1.materialControllerController.list);
        this.router.post('/', materialController_1.materialControllerController.create);
        this.router.delete('/:id', materialController_1.materialControllerController.delete);
        this.router.put('/:id', materialController_1.materialControllerController.update);
        this.router.get('/:id', materialController_1.materialControllerController.getOne);
    }
}
const materialRoutes = new MaterialRoutes();
exports.default = materialRoutes.router;
