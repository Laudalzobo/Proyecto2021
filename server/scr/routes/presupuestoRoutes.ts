import { Router } from 'express';
import presupuestoController from '../controllers/presupuestoController';

class PresupuestoRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', presupuestoController.list);
        this.router.post('/', presupuestoController.create);
        this.router.delete('/:id', presupuestoController.delete);
        this.router.put('/:id/:presente', presupuestoController.update);
        this.router.get('/:id', presupuestoController.getOne);
      
    }
}

const presupuestoRoutes = new PresupuestoRoutes();
export default presupuestoRoutes.router;