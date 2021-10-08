import { Request, Response} from 'express';
import PoolConnection from 'mysql2/typings/mysql/lib/PoolConnection';
import pool from '../database';

class movimientosController {



    public async list (req: Request, res: Response) {
        await pool.query('SELECT * FROM movimiento', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
  
    } 

   


    public async getOne(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const obra = await pool.query('SELECT * FROM movimiento WHERE id= ?',[id], function(err,result, fields){
            console.log(id);
            res.json({obra:result});
        });
        
    }

    public async getOneMovimientos (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
            const obra = await pool.query('SELECT tipo,cantidad, precioUnitario, precioTotal FROM movimiento as mo inner join material as ma on ma.id = mo.idMaterial where mo.IdMovimiento =?',[id], function(err,result, fields){
            console.log(id);
            res.json({movimiento:result});
        });
        
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO movimiento set ?', [req.body], function(err,result,fields) {
            res.json({err:err,result: result,fields:fields});
           
        });
            
          
        
       
    }

    public async update(req: Request, res:Response ): Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE movimiento set ? WHERE id = ?', [req.body, id], function(err,result,fields) {
            res.json({message: 'El movimiento fue actualizado'});
        });
        
    }

    public async delete(req: Request, res:Response) {
        const {id} = req.params;
        await pool.query('DELETE FROM moviemiento WHERE id = ?', [id], function(err,result,fields) {
            res.send({text: 'El movimiento fue eliminado'});
        });
        

    }
}

export const movimientosControllerController = new movimientosController();
export default movimientosController;