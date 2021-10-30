import { Request, Response} from 'express';
import PoolConnection from 'mysql2/typings/mysql/lib/PoolConnection';
import pool from '../database';

class obrasEmpleadoController {



    public async list (req: Request, res: Response) {
        await pool.query('SELECT * FROM obras_empleados', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
  
    } 

   


    public async getOne(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const obra = await pool.query('SELECT * FROM obras_empleados WHERE id= ?',[id], function(err,result, fields){
            console.log(id);
            res.json({obra:result});
        });
        
    }

    public async getOneEmpleados (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
            const obra = await pool.query('SELECT nombre,apellido,id FROM obras_empleados as o inner join empleado as e on e.id = o.idEmpleado where o.Idobra =?',[id], function(err,result, fields){
            console.log(id);
            res.json({empleados:result});
        });
        
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO obras_empleados set ?', [req.body], function(err,result,fields) {
            res.json({err:err,result: result,fields:fields});
           
        });
            
          
        
       
    }

    public async update(req: Request, res:Response ): Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE obras_empleados set ? WHERE id = ?', [req.body, id], function(err,result,fields) {
            res.json({message: 'La obra fue actualizada'});
        });
        
    }

    public async delete(req: Request, res:Response) {
        const {id} = req.params;
        await pool.query('DELETE FROM obras_empleados WHERE id = ?', [id], function(err,result,fields) {
            res.send({text: 'La obra fue eliminada'});
        });
        

    }
}

export const obrasEmpleadoControllerController = new obrasEmpleadoController();
export default obrasEmpleadoController;