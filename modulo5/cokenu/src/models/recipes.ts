
export interface RecipeDB {
    id: string,
    title: string,
    description: string,
    date: string
}
export interface FeedDB {
    id: string,
    title: string,
    description: string,
    createDate: Date,
    userId: string,
    userName: string
}
export class Feed {
    toRecipesModelDB = (recipes: any) => {
        const recipesDB = recipes.map((recipe: any) => {
            return {
                id: recipe.id,
                title: recipe.title,
                description: recipe.description,
                createDate: recipe.date,
                userId: recipe.id_user,
                userName: recipe.name
            }
        })

        return recipesDB
    }
}

export class Recipes {
    constructor(
        private id: string,
        protected title: string,
        protected description: string,
        protected image: string,
        private id_user: string,
        protected date: string
    ) { }

    static toRecipesModel = (recipe: Recipes) => {
        return new Recipes(
            recipe.id,
            recipe.title,
            recipe.description,
            recipe.image,
            recipe.id_user,
            recipe.date
        )
    }

    getId = () => {
        return this.id
    }
    getTitle = () => {
        return this.title
    }
    getDescription = () => {
        return this.description
    }
    getImage = () => {
        return this.image
    }
    getIdUser = () => {
        return this.id_user
    }
    getDate = () => {
        return this.date
    }
}
