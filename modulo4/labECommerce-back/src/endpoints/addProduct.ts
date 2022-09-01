import { Request, Response } from "express";
import { Product } from "../types";
import insertProduct from '../data/insertProduct'

const addProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, price, image_url } = req.body

        const product: Product = {
            id: Date.now().toString(),
            name,
            price,
            image_url
        }
        await insertProduct(product)

        res.status(201).send("Produto adicionado com sucesso!")

    } catch (error: any) {
        if (typeof error === "string") {

            res.send(error)
        } else {

            res.status(500).send(error.sqlMessage || error.message)
        }
    }

}

export default addProducts
