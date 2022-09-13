import BaseDataBase from "./BaseDataBase";


class userData extends BaseDataBase {
    async createUser(id: string, email: string, password: string){
        await this.getConnection()("aula_auth_user")
      .insert({
        id,
        email,
        password,
      })
    }
}

export default userData