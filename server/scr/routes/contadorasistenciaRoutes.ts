import { Router } from 'express';
import contadorAsistenciaController from '../controllers/contadorasistenciaController';

class ContadorAsistenciaRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', contadorAsistenciaController.list);
        this.router.post('/', contadorAsistenciaController.create);
        this.router.delete('/:id', contadorAsistenciaController.delete);
        this.router.put('/:id/:presente', contadorAsistenciaController.update);
        this.router.get('/:id', contadorAsistenciaController.getOne);
      
    }
}

const contadorasistenciaRoutes = new ContadorAsistenciaRoutes();
export default contadorasistenciaRoutes.router;