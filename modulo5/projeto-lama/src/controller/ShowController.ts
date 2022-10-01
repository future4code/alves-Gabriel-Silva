import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { CreateShowInputDTO } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}

    createShow =  async(req: Request, res: Response)=>{
        try {
            const input: CreateShowInputDTO ={
                band: req.body.banda,
                starts_at: req.body.data,
                token: req.headers.authorization as string
            }

            const response = this.showBusiness.createShow(input)

            res.status(201).send(response)

        } catch (error: unknown) {
            if(error instanceof Error){
                res.status(400).send({message: error.message})
            }else{
                res.status(500).send("Um erro inesperado ocorreu")
            }
        }
    }
}