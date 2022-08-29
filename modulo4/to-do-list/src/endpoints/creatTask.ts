import { Request, Response } from "express";
import insertTask from "../data/insertTask";

const creatTask =async (req: Request, res: Response) => {
    try {
        
    const {title, description, limit_date, user_id} = req.body

    let dateTask: Date = limit_date.split('/').reverse().join('-')
    
    await insertTask(title, description, limit_date, user_id)

    res.send("Tarefa adicionada com sucesso!")
    } catch (error: any) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}

export default creatTask