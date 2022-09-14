import { Request, Response } from "express";
import { Product } from "../../types";
import insertProduct from '../../data/products/insertProduct'

const addProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, price, image_url } = req.body

        if(!name || !Number(price) || !image_url){
            res.statusCode = 400
            throw new Error("Dados não atendem aos requisitos para inserção de produtos.")
        }

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

            res.status(res.statusCode || 500).send(error.message)
        }
    }

}

export default addProducts
