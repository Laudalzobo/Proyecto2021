"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const objetoRoutes_1 = __importDefault(require("./routes/objetoRoutes"));
const movimientosRoutes_1 = __importDefault(require("./routes/movimientosRoutes"));
const materialRoutes_1 = __importDefault(require("./routes/materialRoutes"));
const obrasRoutes_1 = __importDefault(require("./routes/obrasRoutes"));
const obrasEmpleadoRoutes_1 = __importDefault(require("./routes/obrasEmpleadoRoutes"));
const path_1 = __importDefault(require("path"));
const asistenciaRoutes_1 = __importDefault(require("./routes/asistenciaRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/objeto', objetoRoutes_1.default);
        this.app.use('/api/obras', obrasRoutes_1.default);
        this.app.use('/api/obrasempleados', obrasEmpleadoRoutes_1.default);
        this.app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
        this.app.use('/api/movimientos', movimientosRoutes_1.default);
        this.app.use('/api/material', materialRoutes_1.default);
        this.app.use('/api/asistencia', asistenciaRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
