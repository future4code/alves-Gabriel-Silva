import app from "./app";
import RecipesController from "./endpoints/recipesController";
import UserController from "./endpoints/userController";

const userController = new UserController()
const recipesController = new RecipesController()

app.get("/user/profile", userController.getInfoUser)
app.get("/user/:id", userController.getUserProfile)
app.post("/user", userController.signup)
app.post("/login", userController.login)
app.post("/recipe", recipesController.createRecipes)