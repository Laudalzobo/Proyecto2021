import { Router } from 'express';
import movimientosController, {  movimientosControllerController } from '../controllers/movimientosController';

class MovimientosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', movimientosControllerController.list);
        this.router.post('/', movimientosControllerController.create);
        this.router.delete('/:id', movimientosControllerController.delete);
        this.router.put('/:id', movimientosControllerController.update);
        this.router.get('/:id', movimientosControllerController.getOne);
        this.router.get('/movimientos/:id', movimientosControllerController.getOneMovimientos);
    }
}

const movimientosRoutes = new MovimientosRoutes();
export default movimientosRoutes.router;