import { Recipes, RecipeDB, FeedDB, Feed } from "../models/recipes";
import BaseDatabase from "./BaseDataBase";

class RecipesData extends BaseDatabase {
    insertRecipes = async (recipe: Recipes): Promise<void> => {
        try {
            const newRecipe = {
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                image: recipe.getImage(),
                id_user: recipe.getIdUser(),
                date: recipe.getDate()
            }

            await this.getConnection()("cokenu_recipes")
                .insert(newRecipe)

        } catch (error: any) {
            console.log(error.sqlMessage || error.message)
            throw new Error(error.message || error.sqlMessage)
        }
    }

    selectRecipes = async (id: string | undefined): Promise<RecipeDB | RecipeDB[]> => {
        try {console.log(id)
            if (!id) {
                const recipes = await this.getConnection()("cokenu_recipes")
                    .select("id", "title", "description", "date")
                console.log("recipes: ", recipes)
                return recipes
              
            } else {
                const recipe = await this.getConnection()("cokenu_recipes")
                .select("id", "title", "description", "date")
                .where({ id })

            return recipe[0]
            }
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }

    selectFeed = async(id_follower: string): Promise<FeedDB[]> =>{
        try {
            const recipesDB = await this.getConnection()
            .select("cokenu_recipes.*", "cokenu_user.name")
            .from("cokenu_follow")
            .innerJoin("cokenu_user", "cokenu_follow.id_user_followed", "cokenu_user.id")
            .innerJoin("cokenu_recipes", "cokenu_follow.id_user_followed", "cokenu_recipes.id_user")
            .where({"cokenu_follow.id_follower": `${id_follower}`})

            const feedDB = new Feed()
            const feed = feedDB.toRecipesModelDB(recipesDB)
            console.log("selectRecipes: ",feed)

            return feed
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }

    updateRecipe = async (title: string, description: string, id: string, id_user:string): Promise<string> =>{
        try {
            await this.getConnection()("cokenu_recipes")
            .update({title, description})
            .where({id})
            .where({id_user})

            return `Receita ${title} atualizada com sucesso!`
        } catch (error: any) {
            console.log(error)
            throw new Error(error.message || error.sqlMessage)
        }
    }
}

export default RecipesData