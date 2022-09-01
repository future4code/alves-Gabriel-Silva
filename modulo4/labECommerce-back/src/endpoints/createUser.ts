import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import {User} from "../types";

const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password }: User = req.body

        const user: User = {
            id: Date.now().toString(),
            name,
            email,
            password
        }

        await insertUser(user)

        res.status(201).send("Usuário Criado com sucesso!")

    } catch (error: any) {
        if (typeof error === "string") {

            res.send(error)
        } else {

            console.log(error.sqlMessage || error.message);
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
}

export default createUser