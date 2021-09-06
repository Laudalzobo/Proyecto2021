"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var objetosController_1 = require("../controllers/objetosController");
var ObjetosRoutes = /** @class */ (function () {
    function ObjetosRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    ObjetosRoutes.prototype.config = function () {
        this.router.get('/', objetosController_1.objetoController.list);
        this.router.post('/', objetosController_1.objetoController.create);
        this.router.delete('/:id', objetosController_1.objetoController.delete);
        this.router.put('/:id', objetosController_1.objetoController.update);
        this.router.get('/:id', objetosController_1.objetoController.getOne);
    };
    return ObjetosRoutes;
}());
var objetosRoutes = new ObjetosRoutes();
exports.default = objetosRoutes.router;
