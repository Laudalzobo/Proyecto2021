import { Request, Response} from 'express';
import PoolConnection from 'mysql2/typings/mysql/lib/PoolConnection';
import pool from '../database';

class materialController {



    public async list (req: Request, res: Response) {
        await pool.query('SELECT * FROM material', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
  
    } 

   


    public async getOne(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const obra = await pool.query('SELECT * FROM material WHERE id= ?',[id], function(err,result, fields){
            console.log(id);
            res.json({obra:result});
        });
        
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO material set ?', [req.body], function(err,result,fields) {
            res.json({err:err,result: result,fields:fields});
           
        });
            
          
        
       
    }

    public async update(req: Request, res:Response ): Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE material set ? WHERE id = ?', [req.body, id], function(err,result,fields) {
            res.json({message: 'El material fue actualizado'});
        });
        
    }

    public async delete(req: Request, res:Response) {
        const {id} = req.params;
        await pool.query('DELETE FROM material WHERE id = ?', [id], function(err,result,fields) {
            res.send({text: 'El material fue eliminado'});
        });
        

    }
}

export const materialControllerController = new materialController();
export default materialController;