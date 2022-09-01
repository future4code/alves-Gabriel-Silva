import { Request, Response } from "express";
import insertUser from "../data/InsertUser";

const creatUser = async (req: Request, res: Response) => {
    const { name, nick, email} = req.body
    try {
        if(!name || !nick || !email){
            throw new Error(`valores inválidos`)
        }
        await insertUser(name, nick, email)
        
        res.send(`Usuário criado com sucesso ${name}, ${nick}, ${email}`)
    } catch (error: any) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}

export default creatUser