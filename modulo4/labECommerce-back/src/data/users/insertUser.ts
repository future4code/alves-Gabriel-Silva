import {User} from "../../types";
import connection from "../connection";

const insertUser = async (user: User): Promise<void> =>{
    try {
       await connection("labecommerce_users")
        .insert(user)

    } catch (error: any) {
        
        throw new Error(
            `Ocorreu um erro com a inserção de dados, verifique os dados enviados e tente novamente. 
            Dica: faça o um get e certifique-se de que o usuário realmente não existe antes de adicionar.
            `)
    } 
}

export default insertUser