"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movimientosControllerController = void 0;
const database_1 = __importDefault(require("../database"));
class movimientosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM movimiento', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const obra = yield database_1.default.query('SELECT * FROM movimiento WHERE id= ?', [id], function (err, result, fields) {
                console.log(id);
                res.json({ obra: result });
            });
        });
    }
    getOneMovimientos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            /*const obra = await pool.query('SELECT tipo,cantidad, precioUnitario, precioTotal FROM movimiento as mo inner join material as ma on ma.id = mo.idMaterial where mo.IdMovimiento =?',[id], function(err,result, fields){
            console.log(id);
            res.json({movimiento:result});*/
            const movimiento = yield database_1.default.query('SELECT mo.id ,mo.cantidad, precioUnitario, precioTotal, ma.tipo, idObra, o.id, o.nombre  FROM movimiento as mo inner join material as ma on ma.id = mo.idMaterial inner join obra as o on o.id=mo.idObra where mo.idObra= ?', [id], function (err, result, fields) {
                console.log(id);
                res.json({ movimiento: result });
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO movimiento set ?', [req.body], function (err, result, fields) {
                res.json({ err: err, result: result, fields: fields });
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE movimiento set ? WHERE id = ?', [req.body, id], function (err, result, fields) {
                res.json({ message: 'El movimiento fue actualizado' });
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM moviemiento WHERE id = ?', [id], function (err, result, fields) {
                res.send({ text: 'El movimiento fue eliminado' });
            });
        });
    }
}
exports.movimientosControllerController = new movimientosController();
exports.default = movimientosController;
