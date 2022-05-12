// Exercícios de interpretação de código:

// exercicio 1

// parte(a)
// resposta: console irá imprimir : ( 'a.', undefined ); pois array é uma variável sem valor definido;
let array
console.log('a. ', array)

// parte(b)
// resposta: console irá imprimir: ( 'b.', null )
array = null
console.log('b. ', array)

// parte(c)
// resposta: console irá imprimir: ('c.', 11)
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

// parte(d)
// resposta: console imprimirá: ('d.', 3 )
let i = 0
console.log('d.', array[i])

// parte(e)
// resposta: console imprimirá: ('e.', 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13)
array[i+1] = 19
console.log('e. ', array)

// parte(f)
// resposta: console imprimirá: ('f.', 9)
const valor = array[i+6]
console.log('f. ', valor)

// exercicio 2 

// resposta:  SUBI NUM ÔNIBUS EM MIRROCOS, (27)
//const frase = prompt("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//                 td maiuscula     trocará A por I     qnts caracteres tem(27)
// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
// frase ficará:  SUBI NUM ÔNIBUS EM MIRROCOS, (27)


// Exercícios de escrita de código

// exercicio 1
// let nome = prompt("Qual o seu nome?")
// let email = prompt("Digite seu email")

//console.log("O e-mail", email, "foi cadastrado com sucesso. Seja bem-vindo(a),", nome, "!")

// exercicio 2

// parte(a):
//let comidasPreferidas = ['lasanha', "feijoada", "moqueca de camarão", "pizza", "coxinha"]

//console.log(comidasPreferidas)

// parte(b)
// resposta: 
// console.log(`Essas são as minhas comidas preferidas: \n ${comidasPreferidas[0]} \n ${comidasPreferidas[1]} \n ${comidasPreferidas[2]} \n ${comidasPreferidas[3]} \n ${comidasPreferidas[4]}`)

// parte(c)
// resposta:
// let comidaUsuario = prompt("Qual sua comida preferida?")
//comidasPreferidas[1] = comidaUsuario
// console.log(comidasPreferidas)

// exercicio 3 

// parte(a)
let listaDeTarefas = []

//parte(b)
let tarefa1 = prompt("Digite uma tarefa que fará hoje")
let tarefa2 = prompt("Digite outra tarefa que fará hoje")
let tarefa3 = prompt("Digite mais uma tarefa que fará hoje")
 listaDeTarefas = [tarefa1, tarefa2, tarefa3]

// //parte(c) 
console.log("1-", tarefa1, "2-", tarefa2, "3-", tarefa3)

// //parte(d)
 
let resposta =(prompt("Digite o número da tarefa que já realizou:", tarefa1, tarefa2, tarefa3 ))-1

// parte(e)
listaDeTarefas.splice(resposta,1)

console.log(listaDeTarefas)          //CORRIGIDO