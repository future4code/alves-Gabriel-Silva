import express, { Request, Response } from 'express'
import cors from 'cors'
import { users, User } from './data'

const app = express()

app.use(express.json())
app.use(cors())

let date = new Date
let anoAtual = date.getFullYear()
let mesAtual = date.getMonth() + 1
let diaHoje = date.getDate()

app.post("/inscrever-se", (req: Request, res: Response) => {
    const { nome, cpf, nascimento } = req.body

    const [dia, mes, ano] = nascimento.split("/")
    const idade = anoAtual - ano

    try {
        if (!nome || !cpf || !nascimento || cpf.length < 11 || cpf.length > 11 || !Number(cpf)) {
            res.statusCode = 422
            throw new Error("Por Favor, insira valores válidos")
        }
        if (idade < 18) {
            res.statusCode = 403
            throw new Error("Você precisa ter no mínimo 18 anos para criar uma conta")
        }
        if (idade === 18) {
            if (mesAtual < mes) {
                res.statusCode = 403
                throw new Error("Você precisa ter no mínimo 18 anos para criar uma conta")
            }
            if (Number(mes) === mesAtual) {
                if (diaHoje < Number(dia)) {
                    res.statusCode = 403
                    throw new Error("Você precisa ter no mínimo 18 anos para criar uma conta")
                }
            }
        }

        users.forEach(user => {
            if (user.CPF === Number(cpf)) {
                res.statusCode = 403
                throw new Error("Usuário já cadastrado. Faça login ara acessar sua conta.")
            }
        })
        const newUser: User = {
            nome,
            CPF: Number(cpf),
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
        users.push(newUser)
        res.send("Seja bem vindo ao LabeBank! Conta criada com sucesso! :)")
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.get("/user/saldo", (req: Request, res: Response) => {
    const cpf = req.body.cpf
    const nome = req.body.nome

    try {
        if (!nome && !cpf) {
            res.statusCode = 422
            throw new Error("Por Favor, insira valores válidos")
        }
        const saldo = users.find((user) => {
            if (user.CPF === Number(cpf) && user.nome === String(nome)) {
                return user.saldo
            }
        })
        if (!saldo) {
            res.statusCode = 404
            throw new Error("Usuário referente aos dados inseridos não existe, verifique os dados e tente novamente.")
        }
        res.send(`Seu saldo é R$ ${saldo?.saldo}`)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.put("/user/saldo/add", (req: Request, res: Response) => {

    const { nome, cpf, valor } = req.body

    let index = users.findIndex(index => index.CPF === Number(cpf))
    let saldo = users[index].saldo + Number(valor)

    try {
        if (!nome || !cpf || !valor) {
            res.statusCode = 422
            throw new Error("Por Favor, insira valores válidos")
        }
        if (index === -1) {
            res.statusCode = 404
            throw new Error("Usuário referente aos dados inseridos não encontrado")
        }
        if (index !== -1) {
            users[index].saldo = saldo
        }

        res.send(`Depósito realizado com sucesso! Seu saldo atual é: R$ ${saldo}`)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
}) 

app.post("/user/pagamento", (req: Request, res: Response) => {

    const { cpf, valor, descricao, data } = req.body
    const [dia, mes, ano] = data.split("/")

    try {
        if (cpf.length < 11 || cpf.length > 11 || !Number(cpf) || !Number(valor) || !descricao) {
            res.statusCode = 422
            throw new Error("Por Favor, insira valores válidos")
        }
        if (anoAtual > Number(ano)) {
            res.statusCode = 422
            throw new Error("Para efetuar um pagamento insira uma data válida!")
        }
        if (anoAtual === Number(ano)) {
            if (mesAtual > Number(mes)) {
                res.statusCode = 422
                throw new Error("Para efetuar um pagamento insira uma data válida!")
            }
            if (mesAtual === Number(mes)) {
                if (diaHoje > Number(dia)) {
                    res.statusCode = 422
                    throw new Error("Para efetuar um pagamento insira uma data válida!")
                }
            }
        }
        if (Number(ano) > anoAtual || Number(mes) > mesAtual) {
            res.send(`Pagamento agendado para o dia ${dia} de ${mes} de ${ano}.`)
        }

        if (Number(mes) === mesAtual && Number(dia) > diaHoje) {
            res.send(`Pagamento agendado para o dia ${dia} de ${mes} de ${ano}.`)
        }

        users.forEach(user => {
            if (user.CPF === Number(cpf)) {
                if (user.saldo < valor) {
                    res.statusCode = 401
                    throw new Error(`Você não tem saldo suficiente, você possui um saldo de R$ ${user.saldo}.`)
                }
            }
        })

        let index = users.findIndex(index => index.CPF === Number(cpf))
        users[index].saldo = users[index].saldo - Number(valor)

        res.send(`Pagamento realizado com sucesso! Seu saldo atual é: R$ ${users[index].saldo}`)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.put("/user/transferencia", (req: Request, res: Response) => {
    const { cpfReme, nomeReme, nomeDest, cpfDest, valor } = req.body

    const remetente = users.findIndex(user => user.CPF === Number(cpfReme) && user.nome === String(nomeReme))
    const destinatario = users.findIndex(dest => dest.CPF === Number(cpfDest) && dest.nome === String(nomeDest))

    let saldoRemetente = users[remetente].saldo - Number(valor)
    let saldoDEstinatario = users[destinatario].saldo + Number(valor)

    try {
        if (!Number(cpfReme) || !nomeReme || !Number(cpfDest) || !nomeDest || !Number(valor) ||
            cpfReme.length < 11 || cpfDest.length > 11 || remetente === -1 || destinatario === -1) {

            res.statusCode = 422
            throw new Error("Informações inválidas! Conta referente inexistente.")
        }
        if (users[remetente].saldo < Number(valor)) {
            res.statusCode = 401
            throw new Error(`Você não tem saldo suficiente para realizar esta operação, seu saldo é de R$ ${users[remetente].saldo}.`)
        }

        users[remetente].saldo = saldoRemetente
        users[destinatario].saldo = saldoDEstinatario

        res.send(`Transferência realizada com sucesso! Você transferiu R$ ${valor} para ${nomeDest}. Seu saldo é de R$ ${users[remetente].saldo}`)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.listen(3003, () => {
    console.log("servidor rodando em localhost:3003")
})
