import axios from "axios";
import { baseURL } from "./baseURL";


// a) Uma função do tipo void, pois não precisa retornar nada, apenas executar.

//b):
const noticia = async (title: string,content: string, date: number)
: Promise<void> => {
    try {
        await axios.put(`${baseURL}/news`,
        {
            title: title,
            content: content,
            date: date
        }
    )
    console.log("notícia criada")
    } catch (error) {
        console.log("erro:", error)
    }
   
}

noticia("teste", "testando", Date.parse("2022-08-29"))