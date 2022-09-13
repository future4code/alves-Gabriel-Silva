// Exercício 1:

// a) Concordo, usar letras junto com números aumentam a segurança, tornando menos provável que esse id se repita.

// Exercício 2:

// class userData extends BaseDataBase {
//     async createUser(id: string, email: string, password: string){
//         await this.getConnection()("")
//       .insert({
//         id,
//         email,
//         password,
//       })
//     }
// }

// a) no código temos o connection que usa os dados do .env para se comunicar com o banco,
//      e uma classe que que faz a inserção no mesmo.

// b):
// CREATE TABLE aula_auth_user(  
//     id VARCHAR(255) PRIMARY KEY,
//     email VARCHAR(100) NOT NULL UNIQUE,
//     password VARCHAR(50) NOT NULL
// );

// c)
//  async createUser(id: string, email: string, password: string){
//         await this.getConnection()("")
//       .insert({
//         id,
//         email,
//         password,
//       })
//     }

// Exercício 3:

