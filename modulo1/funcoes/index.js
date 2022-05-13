// Exercícios de interpretação de código

// exercicio1

//  (a) O que vai ser impresso no console?

//  function minhaFuncao(variavel) {
//  	return variavel * 5
//  }

//  console.log(minhaFuncao(2))
//  console.log(minhaFuncao(10))

// resposta(a): será impresso: 10 e 50 respectivamente.


// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`?
//  O que apareceria no console?

//resposta(b): seria um erro, pois a função estaria sendo usada pra fazer duas coisas não especificadas


// exercício 2

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade

// resposta (a): vai receber um texto e o deixrá em caixa baixa, e também verificará se no texto há a palavra 'cenoura'.


// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   Eu gosto de cenoura
//      ii.  CENOURA é bom pra vista
//      iii. Cenouras crescem na terra

//  resposta(b): i. = eu gosto de cenoura, true.
//              ii. = cenoura é bom pra vista, true.
//             iii. = cenouras crescem na terra, false.


//Exercícios de escrita de código:


// exercício 1. Escreva as funções explicadas abaixo:

// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você:

//resposta (a):  

function informacoes() {
 return `Eu sou Gabriel, tenho 21 anos, moro em Rio Formoso e sou estudante.`
}
console.log(informacoes) // tinha feito certo imicialmente, mas saiu tão rápido que achei que estava faltando algo, então tentei interpretar novamente o enunciado,
// e mesmo depois de ver que o enunciado pedia apenas pra imprimir, e alertou que a função não teria nenhuma entrada ou parãmetro,
// passei a tentar fazer o ímpossivel que era mudar o valor, sem entrada ou parãmetro. o que acho ser impossível. mas com o cançasso e sono que estou, eu não sei é de mais nada. kkk

