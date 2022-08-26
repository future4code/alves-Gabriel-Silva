import express, { Request, Response } from 'express'
import cors from 'cors'
import { afazeres } from './data'

// Exercício 1

const app = express()

app.use(express.json())
app.use(cors())

app.get("/ping", (req: Request, res: Response) =>{
    res.send("Pong")
})

app.get("/afazeres/:status", (req: Request, res: Response) => {
    const status = req.query.status === "true"? true : false
    res.send(afazeres.filter((tarefa) =>{

        if(tarefa.completed === status){
            return tarefa
        }else{
            return "params inválido"
        }
    }))
})

app.listen(3003, () =>{
    console.log("Servidor rodando na minha porta 3003")
})