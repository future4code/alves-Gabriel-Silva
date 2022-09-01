import app from "./app";
import selectPurcharses from "./data/selectPurchases";
import addProducts from "./endpoints/addProduct";
import addPurchar from "./endpoints/addPurchar";
import createUser from "./endpoints/createUser";
import getProducts from "./endpoints/getProducts";
import getPurchases from "./endpoints/getPurchases";
import getUsers from "./endpoints/getUsers";

app.get("/users", getUsers)

app.post("/users", createUser)

app.post("/products", addProducts)

app.get("/products", getProducts)

app.post("/purchases", addPurchar)

app.get("/users/:user_id/purchases", getPurchases)

