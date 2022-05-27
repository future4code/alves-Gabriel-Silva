// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
 return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   return array.sort((a,b) => {
    if (a < b) return -1;
   })
  }

// EXERCÍCIO 04
// tentei um monte de maneiras pra fazer isso, travei nesse de um jeito que nem passei pors seguintes, tô com cabeça pra isso hj n. já vi vídeos de resolução específicos, assisti o plantão e nada...  
function retornaNumerosPares(array) {
   let arrayPar = array.filter((item) => {
    if (item % 2 === 0){
    return arrayPar.push(item)
    }
    }) 
    
  // arrayPar = []
  // array.filter((array) => {
  //   for (i = 0; i < array.length; i++){
  //     if( array[i] % 2 === 0){
  //      arrayPar.push(i)
  //     }
  //     return arrayPar
  //   }
  // })
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}