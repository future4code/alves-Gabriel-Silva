import connection from "../connection";

const insertTask =async (title: string, description: string, limit_date: string, user_id: string) => {
    
    await connection("to_do_tasks")
    .insert({
        title,
        description,
        limit_date,
        user_id
    })
}

export default insertTask