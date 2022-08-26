import express, { Request, Response }  from "express"
import cors from "cors"
import {users, User} from './data'

const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1:
// (a): Utilizaria o método get.
//(b): Indicaria utilizando "/users"

app.get("/users", (req: Request, res: Response) =>{
    res.send(users)
})

//Exercício 2:
// (a): Passei os parâmetros por query. È uma busca restrita a types pré definidos, não vejo a nescessidade de usar path variáveis
// (b): Fiz isso, mas para usar o enum já criado eu teria que modificar cada tipo dos users já existentes,
// então optei por fazer usando o if dessa forma abaixo.
app.get("/users/type", (req: Request, res: Response) =>{
    try {
        const type = req.query.type as string

    if(type.toLocaleUpperCase() !== "ADMIN"  && type.toLocaleUpperCase() !== "NORMAL"){
        res.statusCode = 422
      throw new Error("Por favor, insira um type válido!")
    }
    const usersType = users.filter((typ) =>{
        if(typ.type === type.toUpperCase()){
            return typ
        }
    })
    res.send(usersType)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Exercício 3:
// (a): Para variáveis geralmente é utilizado a Path Variables, ex: "/:name"

app.get("/users/:name", (req: Request, res: Response) =>{
    try {
        const name = req.params.name as string

        const user = users.find((user) =>{
            if(user.name.toLowerCase() === name.toLowerCase()){
                return user
            }
        })
        if(!user){
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }
  
        res.send(user)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Exercício 4:
//

app.post("/users/add", (req: Request, res: Response) =>{
    const {name, email, type, age}:User = req.body
    const newUser:User =  {id: Date.now(), name, email, type, age}

    try {
        users.forEach((user)=>{
            if(user.email === email){
                res.statusCode = 403
                throw new Error("Usuário já existe")
            }
        })
        if(!name && !email && !type && !age){
            users.push(newUser)
        }
        res.status(201).send("Usuário criado com sucesso")

    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.listen(3003, ()=>{
    console.log("servidor rodando em localhost:3003")
})