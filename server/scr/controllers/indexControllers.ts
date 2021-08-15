import { Request, Response} from 'express';

class IndexController {
    public index (req: Request, res: Response) {
        res.json({text: 'The api is in'})

    } 
}

export const indexController = new IndexController();