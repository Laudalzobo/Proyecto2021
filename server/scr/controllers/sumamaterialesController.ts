import { Request, Response} from 'express';
import PoolConnection from 'mysql2/typings/mysql/lib/PoolConnection';
import pool from '../database';

class SumaMaterialesController {



    public async list (req: Request, res: Response) {
  
        const asistencia = await pool.query('SELECT SUM(movimiento.cantidad) as cantidadmateriales from movimiento', function(err,result, fields){
            if (err) throw err;
            res.json(result);
        });
  
    }




    public async getOne(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const asistencia = await pool.query('SELECT * FROM asistencia WHERE id= ?',[id], function(err,result, fields){
            console.log(id);
            res.json({asistencia:result});
        });
        
    }

    

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO asistencia set ?', [req.body], function(err,result,fields) {
            res.json({err:err,result: result,fields:fields});
           
        });
            
          
        
       
    }

    public async update(req: Request, res:Response ): Promise<void> {
        const {id} = req.params;
        const {presente} = req.params;
        console.log(id,presente);
        let presenteUpdate;
        if(presente=="true") presenteUpdate= true
        else presenteUpdate = false
        await pool.query('UPDATE asistencia set presente=? WHERE id=?', [presenteUpdate, id], function(err,result,fields) {
            res.json({message: 'La asistencia fue actualizada'});
            console.log(err);
        });
        
    }

    public async delete(req: Request, res:Response) {
        const {id} = req.params;
        await pool.query('DELETE FROM asistencia WHERE id = ?', [id], function(err,result,fields) {
            res.send({text: 'La asistencia fue eliminada'});
        });
        

    }
}


export const sumaMaterialesController = new SumaMaterialesController();
export default sumaMaterialesController;