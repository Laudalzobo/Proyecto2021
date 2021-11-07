import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import morgan from 'morgan';
import cors from 'cors';
import objetoRoutes from './routes/objetoRoutes';
import movimientosRoutes from './routes/movimientosRoutes';
import materialRoutes from './routes/materialRoutes';
import obrasRoutes from './routes/obrasRoutes';
import obrasEmpleadoRoutes from './routes/obrasEmpleadoRoutes';
import path from 'path';
import asistenciaController from './controllers/asistenciaController';
import asistenciaRoutes from './routes/asistenciaRoutes';
import contadorAsistenciaController from './controllers/contadorasistenciaController';
import contadorasistenciaRoutes from './routes/contadorasistenciaRoutes';
import sumaTotalController from './controllers/sumatotalController';
import sumaTotalRoutes from './routes/sumaTotalRoutes';
import sumaempleadosRoutes from './routes/sumaempleadosRoutes';
import contadorobrasRoutes from './routes/contadorobrasRoutes';
import sumamaterialesRoutes from './routes/sumamaterialesRoutes';
import presupuestoRoutes from './routes/presupuestoRoutes';


class Server {
    public app: Application;

constructor(){
    this.app = express();
    this.config();
    this.routes();
    

}
config():void {
this.app.set('port', process.env.PORT || 3000);
this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
}



routes() : void {
    this.app.use('/',indexRoutes);
    this.app.use('/api/objeto', objetoRoutes);
    this.app.use('/api/obras', obrasRoutes);
    this.app.use('/api/obrasempleados', obrasEmpleadoRoutes)
    this.app.use('/uploads', express.static(path.resolve('uploads')))
    this.app.use('/api/movimientos', movimientosRoutes)
    this.app.use('/api/material', materialRoutes)
    this.app.use('/api/asistencia', asistenciaRoutes);
    this.app.use('/api/contadorasistencia', contadorasistenciaRoutes);
    this.app.use('/api/sumatotalasistencias', sumaTotalRoutes);
    this.app.use('/api/sumaempleados', sumaempleadosRoutes);
    this.app.use('/api/sumaobras', contadorobrasRoutes);
    this.app.use('/api/sumamateriales', sumamaterialesRoutes);
    this.app.use('/api/presupuesto', presupuestoRoutes);
}


start() : void {
this.app.listen(this.app.get('port'), () => {
console.log('Server on port', this.app.get('port'));
});
}
}

const server = new Server();
server.start();