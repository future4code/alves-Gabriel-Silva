import { Product } from "../../types";
import connection from "../connection";

const insertProduct = async (produto: Product): Promise<void> => {
    try {
        await connection("labecommerce_products")
            .insert(produto)

    } catch (error: any) {
        throw new Error(
            `Ocorreu um erro com a inserção de dados, verifique os dados enviados e tente novamente. 
            Dica: faça o um get e certifique-se de que o produto realmente não existe antes de adicionar.
            `)
    }
}

export default insertProduct