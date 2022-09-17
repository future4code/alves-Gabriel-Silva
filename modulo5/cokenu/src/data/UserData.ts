import { InfosUser, User } from "../models/user";
import BaseDatabase from "./BaseDataBase";

class UserData extends BaseDatabase {
    insertUser = async (user: User): Promise<void> => {
        try {
            const newUser = {
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            }
            await this.getConnection()("cokenu_user").insert(newUser)

        } catch (error: any) {
            console.log(error.sqlMessage)
            throw new Error(error)
        }
    }

    findUserByEmail = async (email: string): Promise<User | undefined> => {
        try {
            const user = await this.getConnection()("cokenu_user")
                .select("*")
                .where({ email: email })

            return user[0] && User.toUserModel(user[0])
        } catch (error: any) {
            console.log("findUSer", error.sqlMessage, error.message)
        }
    }

    selectInfoUser = async(id: string):Promise<InfosUser | undefined> =>{
        try {
            console.log("selectInfoUser", "id:", id)
            const infos = await this.getConnection()("cokenu_user")
            .select("name", "email")
            .where({id: "961a47cd-615a-46b6-ab4a-c19c9edf3056"})

            return infos[0] as InfosUser
        } catch (error: any) {
            console.log("selectInfoUser",error.message || error.sqlMessage)
        }
    }
}

export default UserData