import connection from "../connection"

const insertUser = async (name:string, nick:string, email:string)=>{
    await connection("to_do_user")
    .insert({
        id: Date.now().toString(),
        name, 
        nick, 
        email
    })
};

export default insertUser