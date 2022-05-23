/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
   console.log(carta.texto)// imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * //  console.log(`Suas cartas foram: ${carta.texto} e ${carta.texto} e os valores foram ${carta.valor} e ${carta.valor}`)
   //  console.log(`Parabéns você ganhoou!`)
 */

 
 if (confirm("Quer iniciar uma nova rodada?") === true) {
    console.log("Boas vindas ao jogo de Blackjack!")
    } else if (confirm !== true) {
    console.log("O jogo acabou")
    }

    let cartaUser = comprarCarta()
    let cartaUser2 = comprarCarta()
    let cartaPc = comprarCarta()
    let cartaPc2 = comprarCarta()
    

    const verificaVencedor = (cartaUser, cartaUser2, cartaPc, cartaPc2) =>{

       pontosUser = cartaUser.valor + cartaUser2.valor
       pontosPc = cartaPc.valor + cartaPc2.valor

       if (pontosPc > pontosUser){
         console.log(`Computador ganhou.\n As cartas do computador foram: ${cartaPc.texto} e ${cartaPc2.texto}, somando ${pontosPc} pontos.`)
         console.log(`Suas cartas foram ${cartaUser.texto} e ${cartaUser2.texto}, somando ${pontosUser} pontos`) 

         } if (pontosUser > pontosPc) {
          console.log(`Parabéns você ganhou!\n Suas cartas foram ${cartaUser.texto} e ${cartaUser2.texto}, somando ${pontosUser} pontos`)
          console.log(`As cartas do computador foram: ${cartaPc.texto} e ${cartaPc2.texto}, somando ${pontosPc} pontos.`)

         }else if (pontosPc === pontosUser){
          console.log("Empate! Vamos jogar de novo?")
         }
         } 

 verificaVencedor(cartaUser, cartaUser2, cartaPc, cartaPc2)
  
//  OBS: Achei legalzinho de fazer, na verdade foi até simples, não fiz o desafio pois não estava legal pra fazer, acho que o desafio seria mais interessante até, 
// queria usar mais do que vi nas aulas, como o loop, embora ainda esteja um pouco atrapalhado em como realmente implementar em funcões e afins.