import {UserBusiness} from "../src/business/UserBusiness"
import {UserDataBaseMock} from "./Mocks/userDataBaseMock"
import {IdGeneratorMock} from "./Mocks/idGeneratorMock"
import {HashManagerMock} from "./Mocks/HashManagerMock"
import {AuthenticatorMock} from "./Mocks/AuthenticatorMock"
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User"

describe("testando a UserBusiness", ()=>{
    const userBusiness = new UserBusiness(
        new UserDataBaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("teste sucesso no método signup", async ()=>{
        const input: ISignupInputDTO = {
            email: "gabriel@gmail.com",
            name: "Gabriel",
            password: "bananinha"
        }

        const response = await userBusiness.signup(input)
        expect(response.message).toBe("Cadastro realizado com sucesso")
        expect(response.token).toBe("token-mock-normal")
    })

    test("testando o login", async ()=>{
        const input: ILoginInputDTO ={
            email: "astrodev@labenu.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)
        expect(response.message).toBe("Login realizado com sucesso")
        expect(response.token).toBe("token-mock-normal")
    })
})