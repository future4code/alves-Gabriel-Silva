import { Request, Response } from 'express'
import app from "./app";
import { getActorById, getActorByName, getCountGender } from './requests'


// Exercício 1:

// a): Consigo obter o objeto referente ao que está no banco

// b): 

// getActorByName("Glória Pires")
// .then((result) => {
//     console.log(result)
// }) 
// .catch(erro =>{
//     console.log(erro)
// })

// c): 

(async () => {
    await getCountGender("male")
})()




//  ----------- Testes ---------------

// Modelo 1: 

// getActorById("001")
// 	.then((result: any) => {
// 		console.log(result)
// 	})
// 	.catch((err: any) => {
// 		console.log(err)
// 	});

// Modelo 2:

//     (async () => {
//         console.log(await getActorById("002") )
//       })()

// Modelo 3:
app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        console.log(await getActorById(id))

        res.send(await getActorById(id))
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})
