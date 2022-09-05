import app from "./app";
import selectPrice from "./data/products/selectPrice";
import selectPurcharses from "./data/purchases/selectPurchases";
import addProducts from "./endpoints/product/addProduct";
import addPurchar from "./endpoints/purchases/addPurchar";
import createUser from "./endpoints/users/createUser";
import getAllProducts from "./endpoints/product/getProducts";
import getPurchases from "./endpoints/purchases/getPurchases";
import getUsers from "./endpoints/users/getUsers";

app.get("/users", getUsers)

app.post("/users", createUser)

app.get("/products", getAllProducts)

app.post("/products", addProducts)

app.post("/purchases", addPurchar)

app.get("/users/:id/purchases", getPurchases)

selectPrice("1662068508209")