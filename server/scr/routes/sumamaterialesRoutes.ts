import { Router } from 'express';
import sumaEmpleadosController from '../controllers/sumaempleadosController';
import sumaMaterialesController from '../controllers/sumamaterialesController';

class SumaMaterialRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', sumaMaterialesController.list);
        this.router.post('/', sumaMaterialesController.create);
        this.router.delete('/:id', sumaMaterialesController.delete);
        this.router.put('/:id/:presente', sumaMaterialesController.update);
        this.router.get('/:id', sumaMaterialesController.getOne);
      
    }
}

const sumaMaterialRoutes = new SumaMaterialRoutes();
export default sumaMaterialRoutes.router;