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
exports.asistenciaController = void 0;
const database_1 = __importDefault(require("../database"));
class AsistenciaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idObra } = req.params;
            const { fecha } = req.params;
            const asistencia = yield database_1.default.query('SELECT a.id,a.presente,a.idObra,a.idEmpleado,e.apellido,e.nombre FROM ASISTENCIA as a inner join empleado as e on e.id = a.idEmpleado WHERE idObra=? and fecha=?', [idObra, fecha], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const asistencia = yield database_1.default.query('SELECT * FROM asistencia WHERE id= ?', [id], function (err, result, fields) {
                console.log(id);
                res.json({ asistencia: result });
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO asistencia set ?', [req.body], function (err, result, fields) {
                res.json({ err: err, result: result, fields: fields });
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { presente } = req.params;
            console.log(id, presente);
            let presenteUpdate;
            if (presente == "true")
                presenteUpdate = true;
            else
                presenteUpdate = false;
            yield database_1.default.query('UPDATE asistencia set presente=? WHERE id=?', [presenteUpdate, id], function (err, result, fields) {
                res.json({ message: 'La asistencia fue actualizada' });
                console.log(err);
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM asistencia WHERE id = ?', [id], function (err, result, fields) {
                res.send({ text: 'La asistencia fue eliminada' });
            });
        });
    }
}
exports.asistenciaController = new AsistenciaController();
exports.default = exports.asistenciaController;
