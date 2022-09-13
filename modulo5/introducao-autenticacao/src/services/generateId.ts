import {v4} from "uuid"

// Exercício: 1 (b)

export function generateId(): string {
    return v4()
}