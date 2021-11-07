import { Router } from 'express';
import contadorObrasController from '../controllers/contadorobrasController';

class ContadorObrasRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', contadorObrasController.list);
        this.router.post('/', contadorObrasController.create);
        this.router.delete('/:id', contadorObrasController.delete);
        this.router.put('/:id/:presente', contadorObrasController.update);
        this.router.get('/:id', contadorObrasController.getOne);
      
    }
}

const contadorObrasRoutes = new ContadorObrasRoutes();
export default contadorObrasRoutes.router;