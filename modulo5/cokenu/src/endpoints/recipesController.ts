import { Request, Response} from "express"
import RecipesData from "../data/recipesData"
import { InvalidCredencial } from "../error/InvalidCredencial"
import { MissingFields } from "../error/missingFields"
import { Recipes } from "../models/recipes"
import { Authenticator } from "../services/Authenticator"
import GenerateId from "../services/GenerateId"

class RecipesController{
    createRecipes = async (req: Request, res: Response):Promise<void> =>{
        try {
            const newDate = new Date()
            const today = newDate.getDate()
            const month = newDate.getMonth() -1
            const yer = newDate.getFullYear()

            const token = req.headers.authorization as string
            const {title, description, image} = req.body

            if(!title || !description || !token){
                throw new MissingFields()
            }

            const authenticator = new Authenticator()
            const authorization = await authenticator.verifyToken(token)

            if(!authorization){
                throw new InvalidCredencial()
            }

            const generateId = new GenerateId()
            const recipeId = await generateId.createId()

            const date = `${yer}-${month}-${today}`
            const recipes = new Recipes(recipeId, title, description, image, authorization.id, date)
            
            const recipesData = new RecipesData()
            await recipesData.insertRecipes(recipes)

            res.send("Receita adicionada com sucesso!")

        } catch (error: any) {
            res.send(error.message || error.sqlMessage)
        }
    }
}

export default RecipesController