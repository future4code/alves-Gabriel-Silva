// Exercícios de interpretação de código

// exercício 1 
// a). O que vai ser impresso no console?

// resposta: console.log(filme.elenco[0]) irá imprimir: "Matheus Nachtergaele";

// console.log(filme.elenco[filme.elenco.length - 1]) irá imprimir: "Virginia Cavendish";

// console.log(filme.transmissoesHoje[2]) irá imprimir: "Denise Fraga";


// exercício 2 
// a) O que vai ser impresso no console?

// resposta:
// console.log(cachorro) irá imprimir: toda a informação do objeto cachorro = { nome: "Juca", idade: 3, raca: "SRD"};

// console.log(gato) irá imprimir: terá toda a informação do objeto cachorro alterando apenas o nome = { nome: "Juba", idade: 3, raca: "SRD"} 

// console.log(tartaruga) irá imprimir: igual os casos anteriores, alterando a última letra do nome = { nome: "Jubo", idade: 3, raca: "SRD"} 

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// resposta: os (...) copia as informações e organização do abjeto desejado.


// exercício 3
// a) O que vai ser impresso no console?
// resposta: nada será impresso no console;

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// resposta: o retorno da função foram os parâmetros, a função não executou nenhuma ação que pudesse retornar.


// Exercícios de escrita de código
// exercício 1 (a):

const primeiroObjeto = {
 nome: "nome1", 
 apelidos: ["apelido1", "apelido2", "apelido3"]
 }
 
 function imprimeMensagem(objetoEscolhido) {
 console.log(`Eu sou ${objetoEscolhido.nome}, mas pode me chamar de: ${objetoEscolhido.apelidos[0]}, ${objetoEscolhido.apelidos[1]} ou ${objetoEscolhido.apelidos[2]}.`)
 }
 imprimeMensagem(primeiroObjeto)

//  parte (b):
 const novoObjeto = {
 ...primeiroObjeto,
  apelidos: ["novo1", "novo2", "novo3"]
 }
 imprimeMensagem(novoObjeto)

// exercício 2 (a):
 const pessoa = {
     nome: "Bruno",
     idade: 23,
     profissao: "instrutor"
 }

 const pessoa2 = {
     ...pessoa
 }

// parte (b):
 function retornaEmArray(objetoParaArray) {
    array = [objetoParaArray.nome, objetoParaArray.nome.length, objetoParaArray.idade,
         objetoParaArray.profissao, objetoParaArray.profissao.length]
 return array
 }

//não me dei ao trabalho de criar valores diferentes para a pessoa 2, já que o enunciado não pede, apenas copiei o objeto anterior. Espero que tudo bem.
 retornaEmArray(pessoa)    
 retornaEmArray(pessoa2)

// exercício 3 (a):
 let carrinho = []
  
//  parte(b):
 const fruta1 = {
 fruta: "banana",
 disponibilidade: true
 }

 const fruta2= {
 ...fruta1,
 fruta: "maçã"
 }

 const fruta3= {
    ...fruta1,
    fruta: "goiaba"
    }

 // parte(c):
 function frutasEmArray(valor1, valor2, valor3, variavel) {
 variavel = {valor1, valor2, valor3}
 return variavel
 }
 carrinho = [frutasEmArray(fruta1, fruta2, fruta3, carrinho)]
 
// parte(d):
 console.log(carrinho) 

 // não precisei usar o push, tentei o que pensei e aparentemente deu certo, espero que iso nao seja uma, "prática ruim"?
//  carrinho = frutasEmArray(fruta1, fruta2, fruta3, carrinho) => desse jeito, sem os "[]" ficou como objeto contendo todos os outros.
//  Só pra mostrar mesmo. Não imaginei que desse pra fazer com objetos também, legal! rs
 