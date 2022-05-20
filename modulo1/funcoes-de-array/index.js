// ###  Exercícios de interpretação de código

// exercício 1 
// a) O que vai ser impresso no console?
// resposta: será impresso cada objeto contido dentro do array com seus respectivos índices, junto com todo o array em seguida.

// exercício 2
// a) O que vai ser impresso no console?
// resposta: será impresso um novo array contendo apenas os nomes.

// exercício 3
// a) O que vai ser impresso no console?
// resposta: irá imprimir os objetos que têm os apelidos diferentes de 'Chijo', no caso os objetos que têm 'Mandi' e 'Laura'.


// #####  Exercícios de escrita de código

// exercício 1

 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//  a) Crie um novo array que contenha apenas o nome dos doguinhos
// resposta:

 const arrayNomes = pets.map((item) => {
    return item.nome
 })
 console.log(arrayNomes)

// b) Crie um novo array apenas com os cachorros salsicha
// resposta:

 const salsicha = pets.filter((item)=>{
   return item.raca == "Salsicha"
 })
 console.log(salsicha)
 
//  ## resposta (c):

 const mensagem = pets.filter((racaP)=>{
   return racaP.raca.toLocaleLowerCase() == 'poodle'
 }).map((racaP)=>{
   return msg = `Você ganhou um cupom de desconto de 10% para tosar o/a ${racaP.nome}`
 })
 console.log(mensagem)


//  #### exercício 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  a) Crie um novo array que contenha apenas o nome de cada item:
// resposta:
 
 const arrayProdutos = produtos.map((item)=>{
    return item.nome
 })
 console.log(arrayProdutos)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item,
//  aplicando 5% de desconto em todos eles

// resposta:
 const nomePreco = produtos.map((item)=>{
     let novoValor = item.preco - (item.preco * 0.05)
    nomeValor = { 
         nome: item.nome,
         preco: novoValor.toFixed(2)
     }
     return nomeValor
 })

 console.log(nomePreco)

 // já está tarde pra mim, o sono também já está batendo, fica mais um pra terminar depois...