import { Request, Response } from "express";
import getCepUser from "../services/getCepUser";


const getAddress = async (req: Request, res: Response): Promise<void> => {

    // try {

    //     const { logradouro, bairro, localidade, uf, cep, numero, complemento} = req.body


    //     let res = await getCepUser(String(cep))

    // } catch (error: any) {
    //     throw new Error(error)
    // }
}

export default getAddress



// cep user:  {
//     cep: '69050-095',
//     logradouro: 'Beco Cabiuna',
//     complemento: '',
//     bairro: 'Chapada',
//     localidade: 'Manaus',
//     uf: 'AM',
//     ibge: '1302603',
//     gia: '',
//     ddd: '92',
//     siafi: '0255'
//   }