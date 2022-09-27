import {amountCharacters, separateLetters, stringToNumber, toUpperCase, verifyPair} from "../exercicios/exercicios.test"

describe(" praticando jest ", () =>{
    test("exercicio 0", () =>{
        const input = 8
        const result = verifyPair(input)

        expect(result).toBe(true)
    })

    test("exercicio 1, string para caixa alta", ()=>{
        const input = "bananinha"
        const result = toUpperCase(input)

        expect(result).toBe("BANANINHA")
    })

    test("exercicio 2, dividindo caracteres de string em um array de strings", ()=>{
        const input = "bananinha"
        const result = separateLetters(input)

        const expected = [
            'b', 'a', 'n',
            'a', 'n', 'i',
            'n', 'h', 'a'
          ]
        expect(result).toEqual(expected)
    })

    test("exercício 3, transformando um number com formato de string para formato de number", ()=>{
        const input = "5"
        const result = stringToNumber(input)

        expect(result).toBe(5)
    })

    test("exercício 4, retorna a quantidade de caracteres em uma string", ()=>{
        const input = "bananinha"
        const result = amountCharacters(input)

        const expected = 9

        expect(result).toBe(expected)
    })
})
