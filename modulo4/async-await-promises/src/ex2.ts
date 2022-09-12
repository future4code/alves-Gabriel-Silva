import axios from "axios"
import { baseURL } from "./baseURL"

// a) A diferença está na ordem em que é utilizado o async,
// na função nomeada ela vem antes da declaração da função,
// já com arrow function ela vem na atribuição da mesma.

// b):

const getAssinantes = async(): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data
}
getAssinantes()