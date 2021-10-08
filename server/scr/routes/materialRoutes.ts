import { Router } from 'express';
import materialController, {  materialControllerController } from '../controllers/materialController';

class MaterialRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', materialControllerController.list);
        this.router.post('/', materialControllerController.create);
        this.router.delete('/:id', materialControllerController.delete);
        this.router.put('/:id', materialControllerController.update);
        this.router.get('/:id', materialControllerController.getOne);
        
    }
}

const materialRoutes = new MaterialRoutes();
export default materialRoutes.router;