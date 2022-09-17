import { Recipes } from "../models/recipes";
import BaseDatabase from "./BaseDataBase";

class RecipesData extends BaseDatabase{
    insertRecipes = async (recipe: Recipes):Promise<void> =>{
        try {
            // console.log("insertRecipe: ",recipe)

            const newRecipe = {
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                image: recipe,
                id_user: recipe.getIdUser()
                // date: recipe.getDate()
            }
            await this.getConnection()("cokenu_recipes")
            .insert(newRecipe)
        } catch (error: any) {
            console.log(error.sqlMessage || error.message)
            throw new Error(error.message || error.sqlMessage)
        }
    }
}

export default RecipesData