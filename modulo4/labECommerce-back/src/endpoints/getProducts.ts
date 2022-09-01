import selectProducts from "../data/selectProducts";
import { Request, Response } from "express";
import { Product } from "../types";

const getProducts =async (req: Request, res: Response):Promise<void> => {
    try {
        const products: Product[] = await selectProducts()
        res.send(products)
        
    } catch (error: any) {
        if (typeof error === "string") {

            res.send(error)
        } else {

            res.status(500).send(error.sqlMessage || error.message)
        }
    }
}

export default getProducts