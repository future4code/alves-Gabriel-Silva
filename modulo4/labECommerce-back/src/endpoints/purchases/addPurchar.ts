import insertPurchases from "../../data/purchases/insertPurchases";
import { Request, Response } from "express";
import { Purchar } from "../../types";
import selectPrice from "../../data/products/selectPrice";

const addPurchar = async (req: Request, res: Response): Promise<void> => {
    try {
        let { user_id, product_id, quantity} = req.body

        if( !Number(user_id) || !Number(product_id) || !Number(quantity)){
            res.statusCode = 400
            throw new Error("Dados inseridos incompatíveis com o esperado.")
        }

        let precoProduct:any = await selectPrice(product_id)
        let valorTotal = Number(precoProduct) * Number(quantity)

        console.log(valorTotal)

        const purchar: Purchar = {
            id: Date.now().toString(),
            user_id, 
            product_id, 
            quantity, 
            total_price: valorTotal
        }

        await insertPurchases(purchar)
        console.log(purchar)

        res.send("Compra realizada!")

    } catch (error: any) {
        if (typeof error === "string") {

            res.send(error)
        } else {
            res.status( res.statusCode || 500).send(error.message)
        }
    }
}

export default addPurchar