import connection from "../connection";
import {Purchar} from '../../types'

const selectPurcharses = async (id : string):Promise<Purchar[]> =>{

    const purchases:Purchar[] = await connection("labecommerce_purchases")
    .select("*")
    .where({user_id: id})

    return purchases
}

export default selectPurcharses