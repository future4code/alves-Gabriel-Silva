import { Request, Response } from "express";
import RecipesData from "../data/recipesData";
import UserData from "../data/UserData";
import { InvalidCredencial } from "../error/InvalidCredencial";
import { MissingFields } from "../error/missingFields";
import { Recipes } from "../models/recipes";
import { User, USER_ROLES } from "../models/user";
import { Authenticator } from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import HashManager from "../services/HashManager";

class UserController {
    signup = async (req: Request, res: Response): Promise<void> => {
        try {
            const { name, email, password } = req.body

            if (!name || !email || !password || password.length < 6 || !email.includes("@")) {
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

            const user = new User(id, name, email, hash, USER_ROLES.NORMAL)

            await userData.insertUser(user)

            const authenticator = new Authenticator()
            const token = await authenticator.generateToken({ id, role: USER_ROLES.NORMAL })

            res.send({ message: "Usuário cadastrado com sucesso!", token })

        } catch (error: any) {
            console.log(error.message || error.sqlMessage)
            res.status(500).send(error.message)
        }
    }

    login = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                throw new MissingFields()
            }

            const userData = new UserData()
            const userDB = await userData.selectUserByEmail(email)

            if (!userDB) {
                throw new Error("Usuário não cadastrado")
            }

            const hashManager = new HashManager()
            const passwordIsCorrect = await hashManager.compare(password, userDB.getPassword())

            if (!passwordIsCorrect) {
                throw new InvalidCredencial()
            }

            const generateToken = new Authenticator()
            const newToken = await generateToken.generateToken({ id: userDB.getId(), role: userDB.getRole() })

            res.send({ access_token: newToken })

        } catch (error: any) {
            console.log(error.message || error.sqlMessage)
            res.send(error.message || error.sqlMessage)
        }
    }

    getUserProfile = async (req: Request, res: Response): Promise<void> => {
        try {
            const token = req.headers.authorization as string
            let id = req.params.id as string

            if (!token) {
                throw new MissingFields()
            }

            const authenticator = new Authenticator()
            const authorization = await authenticator.verifyToken(token)

            if (!authorization) {
                throw new InvalidCredencial()
            }

            if (id.length < 30) {
                id = authorization.id
            }

            const searchUser = await new UserData().selectInfoUser(id)

            res.send(searchUser)

        } catch (error: any) {
            res.send(error.message || error.sqlMessage)
        }
    }

    followUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const token = req.headers.authorization as string
            const id_user = req.body.id_user as string

            if (!token || !id_user) {
                throw new MissingFields()
            }

            const authenticator = new Authenticator()
            const authorization = await authenticator.verifyToken(token)

            if(id_user === authorization.id){
                throw new Error("Você não pode seguir a sí mesmo")
            }

            if (!authorization) {
                throw new InvalidCredencial()
            }

            const userData = new UserData()
            await userData.isertFollower(id_user, authorization.id)

            res.send("Seguindo com sucesso!")
        } catch (error: any) {
            res.send(error.message || error.sqlMessage)
        }
    }

    
    unfollowUser = async (req: Request, res:Response):Promise<void> =>{
        try {
            const token = req.headers.authorization as string
            const userToUnfollowId = req.body.id as string

            if(!token || !userToUnfollowId){
                throw new MissingFields()
            }

            const authenticator =  new Authenticator()
            const authorization = await authenticator.verifyToken(token)

            if(!authorization){
                throw new InvalidCredencial()
            }

            const userData = new UserData()
            await userData.deleteFollow(userToUnfollowId, authorization.id)

            res.send("Deixou de seguir")
        } catch (error: any) {
            res.send(error.message || error.sqlMessage)
        }
    }
}

export default UserController