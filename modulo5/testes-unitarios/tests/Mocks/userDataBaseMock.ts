import { IUserDB, User, USER_ROLES } from "../../src/models/User"
import { BaseDatabase } from "../../src/database/BaseDatabase"

export class UserDataBaseMock extends BaseDatabase {
    public static TABLE_USERS = "Labook_Users"

    public toUserDBModel = (user: User): IUserDB => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        return userDB
    }

    public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
        switch(email){
            case "astrodev@labenu.com":
                const normalUser: IUserDB ={
                    id: "id-mock",
                    name: "Astro dev",
                    email: "astrodev@labenu.com",
                    password: "hash-bananinha",
                    role: USER_ROLES.NORMAL
                }
                return normalUser

            case "astrobot@labenu.com":
                const adminUser: IUserDB = {
                    id: "id-mock",
                    name: "Astro Bot",
                    email: "astrobot@labenu.com",
                    password: "hash-bananinha",
                    role: USER_ROLES.ADMIN
                }
                return adminUser

                default:
                    return undefined
        }
    }

    public createUser = async (user: User): Promise<void> => {}
}