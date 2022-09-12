import { Request, Response } from "express"
import selectAllUsers from "../data/selectAllUsers"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        let name = String(req.query.name).toLowerCase()
        let type = String(req.query.type).toLowerCase()

        let sort
        let order

        if(!name && !type){
            order = "ASC"
            sort = "email"
        }
        if(name || type){
            order = "ASC"
            sort = name || type
        }

       const users = await selectAllUsers()
 
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