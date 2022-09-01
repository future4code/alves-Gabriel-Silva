import { Request, Response } from "express"
import updateUser from "../data/updateUser"

const editUser = async (req: Request, res: Response) => {

    try {
        let id = req.params.id as string
        const { name, nick } = req.body

        await updateUser(name, nick, id)

        res.send("Mudança realizada com sucesso!")
    } catch (error: any) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}

export default editUser