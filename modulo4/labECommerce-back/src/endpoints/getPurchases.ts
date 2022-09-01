import { Request, Response } from "express";
import selectPurcharses from "../data/selectPurchases";

const getPurchases = async (req: Request, res: Response):Promise<void> =>{
    try {
        let userId = req.params.userId

        const historyPurchases = await selectPurcharses(userId)
        res.send(historyPurchases)
    } catch (error: any) {
        if (typeof error === "string") {

            res.send(error)
        } else {

            res.status(500).send(error.sqlMessage || error.message)
        }
    }
}

export default getPurchases