import axios from 'axios'
import { baseURL } from './baseURL'

// a) ENdpoint GET;

// b) usamos ":Promise<any[]>"

// c):

async function getAssinantes():Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data
}
getAssinantes()
