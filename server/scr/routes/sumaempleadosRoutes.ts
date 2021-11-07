import { Router } from 'express';
import sumaEmpleadosController from '../controllers/sumaempleadosController';

class SumaEmpleadosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', sumaEmpleadosController.list);
        this.router.post('/', sumaEmpleadosController.create);
        this.router.delete('/:id', sumaEmpleadosController.delete);
        this.router.put('/:id/:presente', sumaEmpleadosController.update);
        this.router.get('/:id', sumaEmpleadosController.getOne);
      
    }
}

const sumaEmpleadosRoutes = new SumaEmpleadosRoutes();
export default sumaEmpleadosRoutes.router;