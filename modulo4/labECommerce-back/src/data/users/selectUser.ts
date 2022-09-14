import { User } from "../../types";
import connection from "../connection";

const selectUser = async (): Promise<User[]> => {
    try {
        const user: User[] = await connection("labecommerce_users")
            .select("id", "name", "email")

        return user

    } catch (error: any) {
        throw new Error(
            `Urro inesperado aconteceu :/.`)
    }

}

export default selectUser