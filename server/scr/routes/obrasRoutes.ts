import { Router } from 'express';
import obrasController from '../controllers/obrasController';

class ObrasRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', obrasController.list);
        this.router.post('/', obrasController.create);
        this.router.delete('/:id', obrasController.delete);
        this.router.put('/:id', obrasController.update);
        this.router.get('/:id', obrasController.getOne);
    }
}

const obrasRoutes = new ObrasRoutes();
export default obrasRoutes.router;