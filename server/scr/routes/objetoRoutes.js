"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ObjetosRoutes = /** @class */ (function () {
    function ObjetosRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    ObjetosRoutes.prototype.config = function () {
        this.router.get('/', function (req, res) { return res.send('Objetos'); });
    };
    return ObjetosRoutes;
}());
var objetosRoutes = new ObjetosRoutes();
exports.default = objetosRoutes.router;
