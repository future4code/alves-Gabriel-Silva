import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../errors/BaseError";
import { SignupInputDTO } from "../models/User";

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


            
        } catch (error: unknown) {
            if(error instanceof BaseError){
                res.status(400).send({message: error.message})
            }

            res.status(500).send("Um erro inesperado ocorreu :/")
        }
    }
}