import { Request, Response } from "express"
import UserBusiness from "../business/UserBusiness"


export default class UserController {
    signup = async (req: Request, res: Response):Promise<void> => {
        try {
            const { name, email, password } = req.body
    
            const userBusiness = new UserBusiness()
            const response = await userBusiness.signup(name, email, password)

            res.status(201).send(response)
    
        } catch (error: unknown) {
            
            if(error instanceof Error){
             res.status(400).send({message: error.message})
            }

            res.status(500).send("Ocorreu um erro inesperado :/")
        }
    }
}