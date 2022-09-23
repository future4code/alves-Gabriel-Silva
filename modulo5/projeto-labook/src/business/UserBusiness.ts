import { UserDatabase } from "../database/UserDatabase"
import { EmailInvalid } from "../errors/EmailInvalid"
import { ParamsError } from "../errors/ParamsError"
import { PasswordInvalid } from "../errors/PasswordInvalid"
import { SignupInputDTO, User, USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    signup = async(input: SignupInputDTO): Promise<void> =>{
        const {name, email, password} = input

        if (!name || !email || !password) {
            throw new ParamsError()
        }

        if (typeof name !== "string" || name.length < 3) {
            throw new ParamsError()
        }

        if (typeof email !== "string" || email.length < 3) {
            throw new ParamsError()
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new EmailInvalid()
        }

        if (typeof password !== "string" || password.length < 6) {
            throw new PasswordInvalid()
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if(userDB){
            throw new Error("Email já cadastrado")
        }

        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(password)

        const user = new User(
            id, 
            name,
            email,
            hashedPassword,
            USER_ROLES.NORMAL
        )

        await this.userDatabase.insertUser(user)
    }
}
