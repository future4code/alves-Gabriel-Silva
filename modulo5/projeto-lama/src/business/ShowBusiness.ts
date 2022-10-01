import { ShowDatabase } from "../database/ShowDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { ParamsError } from "../errors/ParamsError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { CreateShowInputDTO, Show } from "../models/Show"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    createShow = async(input: CreateShowInputDTO)=>{
        const {band, starts_at, token} = input

        if(!band || !starts_at || !token){
            throw new ParamsError()
        }

        // converter a data para formato EUA e conferir se está correto e é uma data válida

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload){
            throw new AuthenticationError()
        }

        // procurar se Show com essa data já existe no banco

        if(payload.role === USER_ROLES.NORMAL){
            throw new UnauthorizedError()
        }

        const id = this.idGenerator.generate()

        // const show = new Show(
        //     id,
        //     band,
        //     starts_at
        // )

        // criar show

        const response = {
            message: "Show agendado com suceso!"
        }

        return response
    }

}