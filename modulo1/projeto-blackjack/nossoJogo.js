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

//  ####  parece algo tão simples, o código principal onde tem td é tão reduzido, conseguiria terminar só com if/else mas não estou satisfeito com o tamanho disso.
// Mas também não consigo aplicar o loop direito, já fiz e refiz de formas diferentes, prefiro rever tudo e tentar fazer de forma mais organizada.  
// Já não penso mais com clareza..

 const carta = comprarCarta()
//  console.log(carta.texto)
//  console.log(carta.texto)
   
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
       cartaUsuario = cartaUser
       cartaUsuario2 = cartaUser2
       cartaComputador = cartaPc
       cartaComputador2 = cartaPc2
       console.log(cartaUsuario.valor, cartaUsuario.texto)
       pontosUser = cartaUsuario.valor + cartaUsuario2.valor
       pontosPc = cartaComputador.valor + cartaComputador2.valor
       console.log(pontosUser, pontosPc)
       }


//     if(pontosUser > pontosPc){
//       console.log('Você ganhou! Suas cartas foram:')
     
//    if (pontosPc > pontosUser){
//       console.log('vencedor: pc')
      
//    }else if(pontosUser == pontosPc){
//       console.log('Houve um empate, vamos jogar de novo!')
//    }

// }
 verificaVencedor(cartaUser, cartaUser2, cartaPc, cartaPc2)
    


    