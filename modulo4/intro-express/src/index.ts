import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// Exercício 1

app.get('/', (req: Request, res: Response) => {
    res.send("Hello from Express")
})

// Exercício 2

type User = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string,
    posts: Posts[]
}

// Exercício 3

const usuarios: User[] = [
    {
        id: 1,
        name: "aaaaa",
        phone: 11111111,
        email: "email@gmail.com",
        website: "service.com",
        posts: [
            {
                id: 1,
                title: "JSONPlaceholder is a free online REST API",
                body: "JSONPlaceholder is a free online REST API that you can use whenever you need some fake data.",
                userId: 1
            }
        ]
    },
    {
        id: 2,
        name: "222222",
        phone: 11111111,
        email: "email@gmail.com",
        website: "service.com",
        posts: [
            {
                id: 2,
                title: "JSONPlaceholder is a free online REST API",
                body: "JSONPlaceholder is a free online REST API that you can use whenever you need some fake data.",
                userId: 2
            }
        ]
    },
    {
        id: 3,
        name: "33333",
        phone: 11111111,
        email: "email@gmail.com",
        website: "service.com",
        posts: [
            {
                id: 3,
                title: "JSONPlaceholder is a free online REST API",
                body: "JSONPlaceholder is a free online REST API that you can use whenever you need some fake data.",
                userId: 3
            }
        ]
    },
    {
        id: 4,
        name: "444444",
        phone: 11111111,
        email: "email@gmail.com",
        website: "service.com",
        posts: [
            {
                id: 4,
                title: "JSONPlaceholder is a free online REST API",
                body: "JSONPlaceholder is a free online REST API that you can use whenever you need some fake data.",
                userId: 4
            },
            {
                id: 5,
                title: "PASSOU",
                body: "JSONPlaceholder is a free online REST API that you can use whenever you need some fake data.",
                userId: 4
            }
        ]
    }
]

//Exercício 4

app.get("/users", (req: Request, res: Response) => {
    res.send(usuarios)
})

//Exercício 5

type Posts =
    {
        id: number,
        title: string,
        body: string,
        userId: number
    }



// Exercício 6

// Feito. Escolhi fazer o array de posts dentro do array de usuários, acredito que fica mais organizado e fácil de acessar as informações após uma requisição.


// Exercício 7 

app.get("/posts", (req: Request, res: Response) => {
    res.send(
        usuarios.map((user) => {
            return user.posts
        })
    )
})

// Exercício 8

app.get("/posts/:id", (req: Request, res: Response) => {

    res.send(usuarios.filter((usuario) => {
        if (usuario.id === parseInt(req.params.id)) {
            return usuario.posts
        }
    }).map((post) => post.posts)
    )
})