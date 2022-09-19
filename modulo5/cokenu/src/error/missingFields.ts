import { BaseError } from "./baseError";

export class MissingFields extends BaseError{
    constructor(){
        super("Todos os campos precisam estar preenchidos corretamente.", 422)
    }
}