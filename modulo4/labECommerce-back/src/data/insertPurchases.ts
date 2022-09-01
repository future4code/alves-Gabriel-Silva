import connection from "./connection";
import { Purchar } from "../types";

const insertPurchar = async (purchase: Purchar): Promise<void> => {
    try {
        console.log("entrou no insertPurchar")
        await connection("labecommerce_purchases")
            .insert(purchase)

    } catch (error: any) {
        throw new Error(`Ocorreu um erro com a inserção de dados, verifique os dados enviados e tente novamente.`)
    }

}

export default insertPurchar