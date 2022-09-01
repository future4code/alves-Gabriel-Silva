import connection from "./connection";
import {Purchar} from '../types'

const selectPurcharses = async (user_id : string) =>{
    const purchases = await connection("labecommerce_purchases")
    .select("*")
    .where("user_id =", user_id)
    console.log(purchases)
}

export default selectPurcharses