// #### Exercícios de interpretação de código

// exercício 1 (a) Explique o que o código faz. Qual o teste que ele realiza?
// resposta: o código pega o número digitado e verifica se é divisível por dois.

// resposta(b): ele imprime no console "passou no teste", para números que sejam divisíveis por dois, ou se o resto da divisão é zero. O que é a mesma coisa.

// resposta(c): para números que não são divisíveis por 2, ou o resto não é zero.


// ### exercício 2 (a) Para que serve o código acima?
// resposta: o código receberá o nome de uma fruta escolhida pelo usuário e procurará o valor em 'R$' corrrespondente a essa fruta.

// resposta(b): 'será impresso: O preço da fruta Maçã é R$ 2.25';

// resposta(c): 'O preço da fruta Pêra é R$ 5'; Pois o código não parou ao encontrar o desejado e continuou até o corresponde final de preço;


// ### exercicio 3 (a) O que a primeira linha está fazendo?
// resposta: está declarando uma variável, cujo valor será resultado do prompt/resposta do usuário;

// resposta(b): a questão está pedindo a mensagem do terminal? O terminal não faz parte desse código. Mas a resposta impressa no console seria: 
// "Esse número passou no teste". Se o número fosse -10, nada seria impresso, pois só existe o comando para imrprimir mensagem para um número maior que zero,
//  -10 é menor que zero 

// resposta(c): haverá um erro, pois a variável só existe dentro do bloco da função. Mas ao fazer o teste, notei que se não for declarado como variável (no caso "let"),
//  ela é acessada. Acho que preciso rever os conceitos pra entender melhor o motivo disso.


// ##### Exercícios de escrita de código

// # exercício 1:

// let idadeUser = Number (prompt("Qual sua idade?"))

//  if (idadeUser > 17) {
//      console.log("Você pode dirigir.") 
//  } else {
//      console.log("Você não pode dirigir.")
//  }
  
//  ## exercício 2:
//  let turno = prompt("Em qual turno você estuda? Digite M para (matutino), V para (Vespertino) ou N para (Noturno) ").toLocaleUpperCase()
 
//  if (turno === "M") {
//      console.log("Bom dia!")
//  } else if (turno === "V") {
//      console.log("Boa Tarde!")
//  } else if (turno === "N"){
//      console.log("Boa noite!")
//  }

//  ### exercício 3:
 
// let turnoSwitch = prompt("Em qual turno você estuda? Digite M para (matutino), V para (Vespertino) ou N para (Noturno) ").toLocaleUpperCase()
 
//  switch (turnoSwitch)  {
//      case "M":
//         console.log("Bom dia!");
//           break;
//      case "V":
//          console.log("Boa Tarde!");
//           break;
//      case "N":
//          console.log("Boa noite!")
//           break;
// }


// exercício 4:
//  let generoFilme = prompt("Qual gêrero de filme assistirão?").toLocaleLowerCase()
//  let precoIgresso = prompt("Quanto custa o ingresso para o filme?").toLocaleLowerCase()
 
//  const iraoAssistirOuN = (genero, preco) =>{
 
//  if ((genero === "fantasia") && (preco < 15)) {
//       console.log("Bom filme!")
//      } else if (genero, preco) {
//       console.log("Escolha outro filme :(")
//      }
//      }
 
//  iraoAssistirOuN(generoFilme, precoIgresso)
   

//  ###### DESAFIOS

//  let generoFilme2 = prompt("Qual gêrero de filme assistirão?").toLocaleLowerCase()
//  let precoIgresso2 = prompt("Quanto custa o ingresso para o filme?").toLocaleLowerCase()
//  let lanchinho = Number(prompt("Qual lanchinho você deseja? Digite o número correspondente ao lanche desejado: (1)-pipoca, (2)-chocolate, (3)-doces ou (4)-nenhuma das opções.)")-1)
//  const opcoesLanches = ['pipoca','chocolate', 'doces','não escolheu nenhum lanche']

//  const escolhasCinema = (genero, preco, lanche, escolhaLanche) => {

//  if ((genero === "fantasia") && (preco < 15) && (lanche == [lanchinho])) {
//       console.log(`Bom filme! Aproveite o ${escolhaLanche[lanchinho]}`)
//      } else if (genero, preco) {
//          console.log("Escolha outro filme :(")
//      }
//      }
   
//      escolhasCinema(generoFilme2, precoIgresso2, lanchinho, opcoesLanches)
      

     // código testado. Há espaço para melhoria como no caso da escolha por nenhum lanche receber uma resposta melhor, mas isso não era o que pedia o desafio,
     //   e estou com sono e fome. Fico me devendo essa rs