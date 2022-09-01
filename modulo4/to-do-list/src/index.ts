import { Request, Response } from "express";
import app from "./app";
import creatTask from "./endpoints/creatTask";
import creatUser from "./endpoints/creatUser";
import editUser from "./endpoints/editUser";
import getUser from "./endpoints/getUser"

app.get("/", (req: Request, res: Response) =>{
    console.log("teste")
})
const consol = ()=>{console.log("aaaaaaaaaaaaaaaaaaa")}
app.post("/add/user", creatUser)

app.get("/user/:id", getUser)

app.put("/user/edit/:id", editUser)

app.post("/task", consol)