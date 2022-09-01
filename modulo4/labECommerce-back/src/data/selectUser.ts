import { User } from "../types";
import connection from "./connection";

const selectUser = async (): Promise<User[]> =>{
    
    const user: User[] = await connection("labecommerce_users")   
    .select("id", "name", "email")

    return user
}

export default selectUser