import { Request, Response } from "express";
import { UserBusiness } from "../businnes/UserBusiness";
import { LoginInputDTO, SignupInputDTO } from "../models/User";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}
    
    signup = async(req: Request, res: Response)=>{
        try {
            const input: SignupInputDTO ={
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.signup(input)

            res.status(201).send(response)

        } catch (error: unknown) {

            if(error instanceof Error){
                res.status(400).send({message: error.message})
            } else {
                res.status(500).send({message: "Um erro inesperado ocorreu :/"})
            }
        }
    }

    login = async(req: Request, res: Response) =>{
        try {
            const input: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }
            
            const response = await this.userBusiness.login(input)

            res.send(response)

        } catch (error: unknown) {
            if(error instanceof Error){
                res.status(400).send({message: error.message})
            }else{
                res.status(500).send("Um erro inesperado ocorreu")
            }
        }
    }
}