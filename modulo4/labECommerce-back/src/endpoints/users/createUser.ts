import { Request, Response } from "express";
import insertUser from "../../data/users/insertUser";
import sendEmail from "../../services/senEmail";
import { User } from "../../types";

const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password }: User = req.body

        if (!name || !email || !password || !email.includes("@") || !email.includes(".com") ||
            name.length < 10 || password.length < 8 || password.length > 32) {

            res.statusCode = 400
            throw new Error("Dados enviados não correspondem com os requisitos para criação de conta.")
        }

       let validacao = await sendEmail(email)
       console.log(validacao)

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

            res.status(res.statusCode || 500 || 535).send(error.message)
        }
    }
}

export default createUser