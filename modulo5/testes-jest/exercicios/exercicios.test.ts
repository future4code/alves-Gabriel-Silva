// exercício 0

export const verifyPair = (num: number): boolean =>{
    Math.floor(num)
    return num % 2 === 0
}

// exercício 1:

export const toUpperCase = (string: string): string =>{
    return string.toLocaleUpperCase()
}

// exercício 2:

export const separateLetters = (string: string) =>{
    return Array.from(string.normalize('NFC'))
}

// exercício 3:

export const stringToNumber =(string: string): number =>{
    return Number(string)
}

// exercício 4:

export const amountCharacters = (string: string): number =>{
    return string.length
}