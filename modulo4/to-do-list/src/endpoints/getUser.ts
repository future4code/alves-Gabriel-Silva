import { Request, Response } from "express";
import selectUser from "../data/selectUser";

const getUser = async (req:Request, res: Response) =>{
   try {
    let id = req.params?.id as string

    const user = await selectUser(id)
    
    res.send({message:"sucesso",user})
    
   } catch (error: any) {
      res.status(400).send({ message: error.message || error.sqlMessage })
   }
}

export default getUser