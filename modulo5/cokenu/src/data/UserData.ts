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

    selectUserByEmail = async (email: string): Promise<User | undefined> => {
        try {
            const user = await this.getConnection()("cokenu_user")
                .select("*")
                .where({ email: email })

            return user[0] && User.toUserModel(user[0])
        } catch (error: any) {
            console.log("findUSer", error.sqlMessage, error.message)
        }
    }

    selectInfoUser = async (id: string): Promise<InfosUser | undefined> => {
        try {
            const infos = await this.getConnection()("cokenu_user")
                .select("id", "name", "email")
                .where({ id })

            return infos[0] as InfosUser
        } catch (error: any) {
            console.log("selectInfoUser", error.message || error.sqlMessage)
        }
    }

    isertFollower = async (id_user_followed: string, id_follower: string): Promise<void> => {
        try {
            console.log("isertFFF:", id_user_followed)
            await this.getConnection()("cokenu_follow")
                .insert({ id_user_followed, id_follower })

        } catch (error: any) {
            console.log("insertFollower: ", error.message || error.sqlMessage)
        }
    }

    deleteFollow = async (id_user_followed: string, id_follower: string): Promise<void> => {
        try {
            await this.getConnection()("cokenu_follow")
                .delete()
                .where({id_user_followed})
                .andWhere({id_follower})

        } catch (error: any) {
            console.log(error.message || error.sqlMessage)
            throw new Error(error)
        }
    }
}

export default UserData