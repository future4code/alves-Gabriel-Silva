import axios from "axios";
import { baseURL } from "./baseURL";

type user = {
    id: string;
    name: string;
    email: string;
}

const notificacoes = async (users: user[], message: string): Promise<void> => {
    try {
        users.forEach(async (user) => {
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message
            })
        })
        console.log("Notificações enviadas")

    } catch (error) {
        console.log(error)
    }

}
