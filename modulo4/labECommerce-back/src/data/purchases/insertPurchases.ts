import connection from "../connection";
import { Purchar } from "../../types";

const insertPurchases = async (purchase: Purchar): Promise<void> => {
    try {
        await connection("labecommerce_purchases")
            .insert(purchase)

    } catch (error: any) {
        throw new Error(`Ocorreu um erro com a inserção de dados, verifique os dados enviados e tente novamente.`)
    }
}

export default insertPurchases