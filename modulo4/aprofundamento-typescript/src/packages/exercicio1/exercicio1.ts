// Exercício 1

// (a) resposta: const minhaString:  string = 22
// Ele não permite que seja atribúido um tipo diferente ao que foi declarado.

// (b) resposta: para usar mais de um tipo de valor podemos usar "&&" ou "|", 
// dependendo da nescessidade, enquanto o "|" permite um ou outro, o "&&" 'exige' os dois 
// tipos declarados.

const meuNumero: (number | string) = 22

// (c) resposta: 

enum CorFavorita {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CorFavorita,
}

const pessoa1: Pessoa = {
    nome: "Gabriel",
    idade: 22,
    corFavorita: CorFavorita.AZUL,
}

const pessoa2: Pessoa = {
    nome: "Maria",
    idade: 25,
    corFavorita: CorFavorita.VIOLETA,
}

const pessoa3: Pessoa = {
    nome: "João",
    idade: 31,
    corFavorita: CorFavorita.VERDE,
}

const pessoa4: Pessoa = {
    nome: "Mônica",
    idade: 29,
    corFavorita: CorFavorita.LARANJA,
}

const pessoa5: Pessoa = {
    nome: "Emília",
    idade: 15,
    corFavorita: CorFavorita.VERMELHO,
}

// (d) resposta: linha 14-27