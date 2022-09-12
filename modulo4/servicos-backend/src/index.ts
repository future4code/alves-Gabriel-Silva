import app from './app'
import getAddress from './endpoints/getAddress';
import getCepUser from "./services/getCepUser";
import {createTable} from './data/createTable'

app.get("/:cep", getAddress)
