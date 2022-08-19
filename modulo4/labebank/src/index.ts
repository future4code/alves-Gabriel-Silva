import express, { query, Request, Response } from 'express'
import cors from 'cors'
import { users, User } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.post("/inscrever-se", (req: Request, res: Response) =>{
    const {nome, CPF, nascimento} = req.body
    const data = nascimento.split("/")

    try {
        if(!nome || !CPF || !nascimento || CPF !== Number){
            res.statusCode = 422
            throw new Error("Por Favor, insira valores válidos")
        }
        if(2022 - data[2] < 18){
            res.statusCode = 203
            throw new Error("Você precisa ter no mínimo 18 anos para criar uma conta")
        }
        const newUser: User = {
            nome,
            CPF,
            nascimento,
            saldo: 0,
            extrato: [
                {
                    valor: 0,
                    data: "",
                    descricao: ""
                }
            ]
        }

        if(2022 - data[2] === 18){
           if(8 <= data[1] && data[0] < 30){
            res.statusCode = 203
            throw new Error("Você precisa ter no mínimo 18 anos para criar uma conta")
           }
        }   
        users.push(newUser)
        res.send(newUser)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
})

app.get("/user/saldo", (req: Request, res: Response) =>{
    const cpf = Number(req.body.cpf)
    const nome = req.body.nome as string
    try {
        if(!nome && !cpf){
            res.statusCode = 422
            throw new Error("Por Favor, insira valores válidos")
        }
        users.forEach((user) =>{
            if(nome !== user.nome || cpf !== user.CPF){
                res.statusCode = 404
            throw new Error("Usuário referente aos dados inseridos não encontrado")
            }
        })
        const saldo = users.find((user)=>{
            if(user.CPF === cpf && user.nome === nome){
                return user.saldo
            }
        })
        res.send(`Seu saldo é R$ ${saldo?.saldo}`)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
})

app.put("/user/saldo/add", (req: Request, res: Response) => {
    type Body = {
        nome: string,
        cpf: number,
        valor: number
    }
    const {nome, cpf, valor}:Body = req.body
    try {
        if(!nome || !cpf || !valor){
            res.statusCode = 422
            throw new Error("Por Favor, insira valores válidos")
        }
        users.forEach((user) =>{
            if(nome !== user.nome || Number(cpf) !== user.CPF){
                res.statusCode = 404
            throw new Error("Usuário referente aos dados inseridos não encontrado")
            }
        })
        let index = users.findIndex(index => index.CPF === Number(cpf))
        let saldo =  users[index].saldo + Number(valor)
        if(index !== -1){
            users[index].saldo = saldo
        }
        res.send(`Depósito realizado com sucesso! Seu saldo atual é: R$ ${saldo}`)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
}) 

app.post("/user/pagamento", (req: Request, res: Response) => {
    type Body = {
        valor: number,
        descricao: string,
        data: string
    }
    const {valor, descricao, data}:Body = req.body

    try {
        if(!valor || !descricao){
            res.statusCode = 422
            throw new Error("Por Favor, insira valores válidos")
        }

    } catch (error: any) {
        
    }
})

app.get("/data", (req: Request, res: Response) => {
    let data = new Date
    res.send(`data:${data}`)
})

app.listen(3003, () =>{
    console.log("servidor rodando em localhost:3003")
})
