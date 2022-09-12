import { connection } from "./connection";
import { Address } from "../constants/types";

const printError = (error: any) =>{console.log(error.sqlMessage || error.message)}

const insertAddressUser = (address: Address) => connection("address_users")
.insert(address)
.then( () => {console.log("endereço adiocionado!")})
.catch(printError)
export default insertAddressUser