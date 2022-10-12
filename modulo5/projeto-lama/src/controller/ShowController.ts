import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BuyTicketInputDTO, CreateShowInputDTO, DeleteTicketInputDTO } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) { }

    createShow = async (req: Request, res: Response) => {
        try {
            const input: CreateShowInputDTO = {
                band: req.body.banda,
                starts_at: req.body.data,
                token: req.headers.authorization as string
            }

            const response = await this.showBusiness.createShow(input)

            res.status(201).send(response)

        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).send({ message: error.message })
            } else {
                res.status(500).send("Um erro inesperado ocorreu")
            }
        }
    }

    getShows = async (req: Request, res: Response) => {
        try {
            const response = await this.showBusiness.getShows()

            res.send(response)

        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).send({ message: error.message })
            } else {
                res.status(500).send("Um erro inesperado ocorreu")
            }
        }
    }

    buyTicket = async (req: Request, res: Response) => {
        try {
            const input: BuyTicketInputDTO = {
                show_id: req.body.id,
                user_id: req.body.userId,
                token: req.headers.authorization as string
            }

            const response = await this.showBusiness.buyTicket(input)

            res.send(response)

        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).send({ message: error.message })
            } else {
                res.status(500).send("Um erro inesperado ocorreu")
            }
        }
    } 

    deleteTicket = async (req: Request, res: Response) => {
        try {
            const input: DeleteTicketInputDTO ={
                token: req.headers.authorization as string,
                show_id: req.params.id
            }

            const response = await this.showBusiness.deleteTicket(input)

            res.send(response)

        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).send({ message: error.message })
            } else {
                res.status(500).send("Um erro inesperado ocorreu")
            }
        }
    }
}