import { connection } from "./connection";


const printError = (error: any) =>{console.log(error.sqlMessage || error.message)}

export const createTable = () => connection.raw(`
    CREATE TABLE address_users (
        id VARCHAR(100) PRIMARY KEY, 
        name VARCHAR(50) NOT NULL,
        nickname VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(50) UNIQUE NOT NULL,
        address VARCHAR(100)
    );
`)
.then(() => { console.log("Tabela criada")})
.catch(printError)