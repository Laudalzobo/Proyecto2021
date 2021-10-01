import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import morgan from 'morgan';
import cors from 'cors';
import objetoRoutes from './routes/objetoRoutes';
import obrasRoutes from './routes/obrasRoutes';
import obrasEmpleadoRoutes from './routes/obrasEmpleadoRoutes';
import path from 'path';


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

}


start() : void {
this.app.listen(this.app.get('port'), () => {
console.log('Server on port', this.app.get('port'));
});
}
}

const server = new Server();
server.start();