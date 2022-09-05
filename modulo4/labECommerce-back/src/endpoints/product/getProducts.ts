import selectProducts from "../../data/products/selectProducts";
import { Request, Response } from "express";
import { Product } from "../../types";

const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("entrou no")
        let order = req.query.order as string
        let sort = req.query.sort   as string
        let search = req.query.name as string

        console.log(sort, order, search)

        if(!sort){sort = "name"}

        if (!order || (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC")) {
            order = "ASC"
         }

        const products: Product[] = await selectProducts(search, sort, order)
        res.send(products)

    } catch (error: any) {
        if (typeof error === "string") {

            res.send(error)
        } else {

            res.status(500).send(error.message)
        }
    }
}

export default getAllProducts

// sort = name ou price
// order = ASC ou DESC
