import connection from "../connection";

const updateUser =async (name: string, nick: string, id: string) => {

    await connection.raw(`
        UPDATE to_do_user
        SET name = "${name}", 
        nick = "${nick}"
        WHERE id = ${id}
    `)
}

export default updateUser