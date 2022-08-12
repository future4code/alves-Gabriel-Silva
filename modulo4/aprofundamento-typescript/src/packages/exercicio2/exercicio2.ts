// Exercicio 2 (a) resposta: entrada é um array de números e a saida é um objeto do tipo Estatistica.

type Estatistica = {
        maior: number,
        menor: number,
        media: number
}

function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:Estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// parte (b): numerosOrdenados:number, soma:number, num:number, estatisticas:Estatistica.

// parte (c): 

    type AmostraDeDados = {
        numeros: number[],
        obterEstatisticas: (numeros:number[]) => {}
    }
