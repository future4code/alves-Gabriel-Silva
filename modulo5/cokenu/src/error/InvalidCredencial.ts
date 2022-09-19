import { BaseError } from "./baseError";

export class InvalidCredencial extends BaseError{
    constructor(){
        super("As credenciais estão incorretas.",401)
    }
}