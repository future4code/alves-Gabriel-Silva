import { User } from "../model/user";
import BaseDatabase from "./BaseDataBase";

export default class UserData extends BaseDatabase{

    AULA_ARQUITETURA_USERS = "aula_arquitetura_users"

    toUserDBModel = (user: User) =>{
        const userDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        return userDB
    }
    insertUser = async (user: User): Promise<void> => {
        try {
            const userDB = this.toUserDBModel(user)

            await this.getConnection()(this.AULA_ARQUITETURA_USERS).insert(userDB)

        } catch (error: any) {
            throw new Error(error)
        }
    }

    selectUserByEmail = async (email: string): Promise<User | undefined> => {
        try {
            const user = await this.getConnection()(this.AULA_ARQUITETURA_USERS)
                .select("*")
                .where({ email: email })

            return user[0] && User.toUserModel(user[0])
        } catch (error: any) {
            throw new Error(error)
        }
    }
}