import { Request, Response} from 'express';
import PoolConnection from 'mysql2/typings/mysql/lib/PoolConnection';
import pool from '../database';

class ObrasController {



    public async list (req: Request, res: Response) {
        await pool.query('SELECT * FROM obra', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
  
    } 

   


    public async getOne(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const obra = await pool.query('SELECT * FROM obra WHERE id= ?',[id], function(err,result, fields){
            console.log(id);
            res.json({obra:result});
        });
        
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO obra set ?', [req.body], function(err,result,fields) {
            res.json({messsage: 'Obra guardada'});
           
        });
            
          
        
       
    }

    public async update(req: Request, res:Response ): Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE obra set ? WHERE id = ?', [req.body, id], function(err,result,fields) {
            res.json({message: 'La obra fue actualizada'});
        });
        
    }

    public async delete(req: Request, res:Response) {
        const {id} = req.params;
        await pool.query('DELETE FROM obra WHERE id = ?', [id], function(err,result,fields) {
            res.send({text: 'La obra fue eliminada'});
        });
        

    }
}

export const obrasController = new ObrasController();
export default obrasController;