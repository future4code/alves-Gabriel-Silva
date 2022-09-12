import axios from "axios";
import BASE_URL from '../constants/BASE_URL'
import { Address } from "../constants/types";
import insertAddressUser from "../data/insertAddressUser";

const getCepUser = async (cep: string): Promise<Address> => {
    try {
        const cepUser = await axios.get(`${BASE_URL}/${cep}/json`)
        
        console.log("cep user: ",cepUser.data)

        const { logradouro, bairro, localidade, uf } = cepUser.data

        const address:Address = {logradouro, bairro, localidade, uf}
        await insertAddressUser(address)

        return address

    } catch (error: any) {
        throw new Error(error)
    }
}

export default getCepUser
