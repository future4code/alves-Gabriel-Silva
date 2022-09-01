import connection from "../connection";


export type UserData = {
    id:string,
    nick:string
}

const selectUser = async (id: string): Promise <UserData> => {
    const [result] = await connection("to_do_user")
    .select("id", "nick")
    .where({id})

    const user: UserData ={
        id: result.id,
        nick: result.nick
    }

    return user
}

export default selectUser