import { Request, Response } from "express"
import { connection } from "../data/connection"
import selectAllUsers from "../data/selectAllUsers"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio
       WHERE 
    `)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
}