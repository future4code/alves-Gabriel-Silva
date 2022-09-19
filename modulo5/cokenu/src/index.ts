import app from "./app";
import RecipesController from "./endpoints/recipesController";
import UserController from "./endpoints/userController";

const userController = new UserController()
const recipesController = new RecipesController()


app.get("/user/feed", recipesController.getFeed)
app.get("/user/profile/:id", userController.getUserProfile)
app.get("/user/:id", userController.getUserProfile)

app.post("/user", userController.signup)
app.post("/login", userController.login)

app.get("/recipes/all", recipesController.getRecipe)
app.get("/recipe/:id", recipesController.getRecipe)

app.post("/recipe/:id", recipesController.createRecipes)
app.put("/recipe", recipesController.putRecipe)

app.post("/follow", userController.followUser)
app.post("/user/unfollow", userController.unfollowUser)
