export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface InfosUser{
    id: string,
    name: string,
    email: string
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES
    ) { }

    static toUserModel = (user: any): User => {
        return new User(user.id, user.name, user.email, user.password, user.role)
    }

    getId = () => {
        return this.id
    }

    getName = () => {
        return this.name
    }
    getEmail = () => {
        return this.email
    }
    getPassword = () => {
        return this.password
    }
    getRole = () => {
        return this.role
    }
}
