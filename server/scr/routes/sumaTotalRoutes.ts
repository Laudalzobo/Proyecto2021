import { Router } from 'express';
import sumaTotalController from '../controllers/sumatotalController';

class SumaAsistenciaRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', sumaTotalController.list);
        this.router.post('/', sumaTotalController.create);
        this.router.delete('/:id', sumaTotalController.delete);
        this.router.put('/:id/:presente', sumaTotalController.update);
        this.router.get('/:id', sumaTotalController.getOne);
      
    }
}

const sumaAsistenciaRoutes = new SumaAsistenciaRoutes();
export default sumaAsistenciaRoutes.router;