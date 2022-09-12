import axios from "axios";
import { baseURL } from "./baseURL";


type user = {
	id: string;
	name: string;
	email: string;
}

// a) Não observo nenhum erro.

// b): Acredito que vai facilitar o acesso a esses dados depois,
// Nos dando certeza de que tipo de dados estamos lidando de fato.

const getAssinantes = async(): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    const result:user[] = response.data.map((user: user)=>{
        return user
    })
    return result
}
getAssinantes()