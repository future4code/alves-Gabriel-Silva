import insertPurchar from "../data/insertPurchases";
import { Request, Response } from "express";
import { Purchar } from "../types";

const addPurchar = async (req:Request, res: Response): Promise<void> =>{
    try {
        console.log("entrou no addPurchar")
        const {user_id, product_id, quantity, total_price} = req.body

        const purchar:Purchar = {id: Date.now().toString(),
            user_id, product_id, quantity, total_price}

            console.log("função addPurchar",purchar)

           await insertPurchar(purchar)
           res.send("Compra realizada!")
    } catch (error: any) {
        if (typeof error === "string") {

            res.send(error)
        } else {

            console.log(error.sqlMessage || error.message);
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
}

export default addPurchar