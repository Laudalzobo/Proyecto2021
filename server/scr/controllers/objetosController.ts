import { Request, Response} from 'express';
import PoolConnection from 'mysql2/typings/mysql/lib/PoolConnection';
import pool from '../database';

class ObjetoController {


    public async list (req: Request, res: Response) {
        await pool.query('SELECT * FROM empleado', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        })
  
    } 


    public async getOne(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const empleado = await pool.query('SELECT * FROM empleado WHERE id= ?',[id], function(err,result, fields){
            console.log(id);
            res.json({empleado:result});
        });
        
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO empleado set ?', [req.body], function(err,result,fields) {
            res.json({messsage: 'Empleado guardado'});
            res.json({empleado:result});
        });
            
          
        
       
    }

    public async update(req: Request, res:Response ): Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE empleado set ? WHERE id = ?', [req.body, id], function(err,result,fields) {
            res.json({message: 'El empleado fue actualizado'});
        });
        
    }

    public async delete(req: Request, res:Response) {
        const {id} = req.params;
        await pool.query('DELETE FROM empleado WHERE id = ?', [id], function(err,result,fields) {
            res.send({text: 'El empleado fue eliminado'});
        });
        

    }
}

export const objetoController = new ObjetoController();
export default objetoController;