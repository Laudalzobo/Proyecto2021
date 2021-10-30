import { Router } from 'express';
import asistenciaController from '../controllers/asistenciaController';

class AsistenciaRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/:idObra/:fecha', asistenciaController.list);
        this.router.post('/', asistenciaController.create);
        this.router.delete('/:id', asistenciaController.delete);
        this.router.put('/:id/:presente', asistenciaController.update);
        this.router.get('/:id', asistenciaController.getOne);
    }
}

const asistenciaRoutes = new AsistenciaRoutes();
export default asistenciaRoutes.router;