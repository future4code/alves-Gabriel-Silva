import { Request, Response } from "express";
import selectPurcharses from "../../data/purchases/selectPurchases";

const getPurchases = async (req: Request, res: Response):Promise<void> =>{
    try {
        let userId = req.params.id

        if(!Number(userId)){
            res.statusCode = 400
            throw new Error("Id incompatível com o esperado.")
        }

        const historyPurchases = await selectPurcharses(userId)
        
        res.send(historyPurchases)

    } catch (error: any) {
        if (typeof error === "string") {

            res.send(error)
        } else {

            res.status(res.statusCode || 500).send(error.message)
        }
    }
}

export default getPurchases