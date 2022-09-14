import { Product } from "../../types";
import connection from "../connection";

const selectProducts = async (search: string, sort: string, order: string): Promise<Product[]> => {
    try {

        const products = await connection("labecommerce_products")
            .where("name", "LIKE", `%${search ? search : ""}%`)
            .orderBy(sort, order)

        return products
    } catch (error: any) {
         throw new Error(
            `Ocorreu um erro com sua busca, verifique os dados enviados e tente novamente.`)
    }
}

export default selectProducts