
// Exercícios de interpretação de código

// exercicio 1:
// parte (a):

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)   // resposta parte (a): console imprimirá:   a.;  false; 

 //parte (b)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)        //resposta parte (b): console imprimirá: b.;  false;

// parte (c): 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)              // resposta parte (b): console imprimirá:  b.;  true;

// parte (d): 

console.log("d. ", typeof resultado)    // resposta (d): console imprimirá: d.; boolean

// Exercicio 2:

let primeiroNumero = Number (prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma) 

//  Vamos ajudá-lo: consegue perceber algum problema?
// Resposta: o valor será concatenado, pois o "prompt" sempre retorna o valor em string;

//O que será impresso no console?
// Resposta: primeiroNumerosegundoNumero;

//Exercicio 3: 
// resposta:

//let primeiroNumero = Number (prompt("Digite um numero!")) 
//let segundoNumero = Number (prompt("Digite um numero!"))


//Exercícios de escrita de código:

// Exercicio 1 

// parte (a): 
let idadeUsuario = Number (prompt ("Qual sua idade?"))

// parte (b): 
let idadeAmigo = Number (prompt("Qual a idade do seu melhor amigo(a)?"))

// parte (c):

console.log("Sua idade é maior do que a do seu amigo?", idadeUsuario > idadeAmigo)

// parte(d):

let diferencaIdade = idadeUsuario - idadeAmigo


console.log(diferencaIdade) 

// Exercicio 2

// parte (a):

let numeroPar = Number (prompt ("Insira um número par"))

// parte (b):

console.log(numeroPar % 2 )

// parte (c): sim. o resto da divisão de um número par, sempre será 0.

// parte (d): retorna um número ímpar, nesse caso (1).

// Exercicio 3 

let idadeAnos = Number (prompt("Quantos anos você têm?"))
let idadeMeses = idadeAnos * 12
let idadeDias = idadeAnos * 365
let idadeHoras = idadeAnos * (365 * 24)

// parte (a): 

console.log(idadeMeses)

// parte (b):
 
console.log(idadeDias)

// parte (c):

console.log(idadeHoras)

// Exercicio 4 

let pergunta1 = Number (prompt("Digite um número"))
let pergunta2 = Number (prompt("Digite outro número"))

let numero1 = pergunta1
let numero2 = pergunta2

let divisao1 = numero1 / numero2
let divisao2 = numero2 / numero1
let restoDivisao1 = numero1 % numero2
let restoDivisao2 = numero2 % numero1

console.log("O primeiro numero é maior que o segundo?", pergunta1 > pergunta2)
console.log("O primeiro numero é igual ao segundo?", pergunta1 === pergunta2)
console.log("O primeiro numero é divisível pelo segundo?", restoDivisao1 === 0)
console.log("O segundo numero é divisível pelo primeiro?", restoDivisao2 === 0)



