import { Router } from 'express';
import { objetoController } from '../controllers/objetosController';

class ObjetosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', objetoController.list);
        this.router.post('/', objetoController.create);
        this.router.delete('/:id', objetoController.delete);
        this.router.put('/:id', objetoController.update);
        this.router.get('/:id', objetoController.getOne);
    }
}

const objetosRoutes = new ObjetosRoutes();
export default objetosRoutes.router;