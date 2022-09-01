import { Request, Response } from "express";
import selectUsers from "../data/selectUser";
import { User } from "../types";

const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: User[] = await selectUsers()

        res.send(users)

    } catch (error: any) {
        if (typeof error === "string") {

            res.send(error)
        } else {

            res.status(500).send(error.sqlMessage || error.message)
        }
    }
}

export default getUsers