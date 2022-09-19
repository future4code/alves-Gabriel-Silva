import UserData from "../data/UserData"
import { MissingFields } from "../error/missingFields"
import { User } from "../model/user"
import { Authenticator } from "../services/Authenticator"
import GenerateId from "../services/GenerateId"
import HashManager from "../services/HashManager"

export default class UserBusiness {
    signup = async (name: string, email: string, password: string): Promise<any> => {

        if (!name || typeof name !== "string" || !email || typeof email !== "string"
            || !password || password.length < 6 || !email.includes("@")) {

            throw new MissingFields()
        }
 
        const userData = new UserData()
        const userDB = await userData.selectUserByEmail(email)

        if (userDB) {
            throw new Error("usuário já cadastrado")
        }

        const generateId = new GenerateId()
        const id = await generateId.createId()

        const hash = await new HashManager().hash(password)

        const user = new User(id, name, email, hash)

        await userData.insertUser(user)

        const authenticator = new Authenticator()
        const token = await authenticator.generateToken({ id: user.getId(), role: user.getRole() })

        const response = {token}

        return { response }
    }
}