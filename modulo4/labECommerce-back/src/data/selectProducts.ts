import { Product } from "../types";
import connection from "./connection";

const selectProducts = async ():Promise<Product[]> => {

    const products = await connection("labecommerce_products")
    
    return products
}

export default selectProducts