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