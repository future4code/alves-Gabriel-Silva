import * as jwt from "jsonwebtoken"
import dotenv from "dotenv";
import { USER_ROLES } from "../model/user";

dotenv.config()

export interface TokenPayload {
    id: string,
    role: USER_ROLES
}

export class Authenticator {
    generateToken = async (payload: TokenPayload) => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.EXPIRES_IN
            }
        )
        return token
    }

    verifyToken = async (token: string) => {

        const payload: TokenPayload = jwt.verify(token, process.env.JWT_KEY as string) as any

        return payload
    }
}