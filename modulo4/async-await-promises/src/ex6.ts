import axios from "axios";
import { baseURL } from "./baseURL";

// a) Promise.all permite executar várias funções async await de forma paralela.

// b) Faz com que as requisições sejam feitas de forma muito rápida.

// c):
type user = {
    id: string;
    name: string;
    email: string;
}

const sendNotifications = async (users: user[], message: string)
  : Promise<void> => {
  
    try {
       const promises = users.map(async (user) => {
            return axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message
            })
        })
        await Promise.all(promises)

    } catch (error) {
        console.log(error)
    }

  };