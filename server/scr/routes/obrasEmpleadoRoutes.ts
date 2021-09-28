import { Router } from 'express';
import obrasEmpleadoController, { obrasEmpleadoControllerController } from '../controllers/obrasEmpleadoController';

class ObrasEmpleadoRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', obrasEmpleadoControllerController.list);
        this.router.post('/', obrasEmpleadoControllerController.create);
        this.router.delete('/:id', obrasEmpleadoControllerController.delete);
        this.router.put('/:id', obrasEmpleadoControllerController.update);
        this.router.get('/:id', obrasEmpleadoControllerController.getOne);
    }
}

const obrasEmpleadoRoutes = new ObrasEmpleadoRoutes();
export default obrasEmpleadoRoutes.router;