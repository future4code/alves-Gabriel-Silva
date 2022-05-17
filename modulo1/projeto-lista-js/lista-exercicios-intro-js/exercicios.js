// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  num1 + num2
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  mensagem = 4 + 5
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite um valor para a altura do triângulo:"))
  const largura = Number(prompt("Digite um valor para a largura do triângulo:"))
  const area = altura * largura
  console.log(area)
  return
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoNascimento = Number(prompt("Digite seu ano de nascimento :"))
  const idade = anoAtual - anoNascimento
 console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 return imc = (peso / (altura * altura))
}
const resultado = calculaIMC(85, 1.8)
 console.log(resultado)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  nome = prompt("Qual o seu nome?")
  idade = Number(prompt("Qual sua idade"))
  email = prompt("Digite seu email:")
  texto = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(texto)
  return
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
 cor1 = prompt("Digite sua primeira cor favorita:")
 cor2 = prompt("Digite sua segunda cor favorita:")
 cor3 = prompt("Digite sua terceira cor favorita:")
 coresFavoritas = [cor1, cor2, cor3]
 console.log(coresFavoritas)
}



// EXERCÍCIO 06
let texto = "oi"
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = string.toUpperCase()
 return string 
}
retornaStringEmMaiuscula(texto)

// EXERCÍCIO 07
let valorsEspetaculo = 2000
let valorIngresso = 50

function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
   calculo = custo / valorIngresso
  return calculo
}
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
 tamanho1 = string1
 tamanho2 = string2
 possueMsmTamanho = string1.length === string2.length
 return possueMsmTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
 ultimoElemento = array[array.length -1]
 return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
 const posicaoUltimo = [array.length-1]
 const valor1 = array[ posicaoUltimo]
 const indice1 = array[0]
 array[0] = valor1
 array[ posicaoUltimo] = indice1
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.toLowerCase()
  string2 = string2.toLowerCase()
 return string1 == string2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
 let anoAtual = Number(prompt("Digite o ano atual:"))
 let anoNascimento = Number(prompt("Digite o ano de nasimento:"))
 let dataEmissao = Number(prompt("Digite a data de emissão da carteira:"))
 idadePessoa = anoAtual - anoNascimento
 idadeCarteira = anoAtual - dataEmissao
 validade = idadePessoa / idadeCarteira
 tempos = 5 || 10 || 15
 trocarOuNao = idadeCarteira >= validade
 console.log(trocarOuNao)
 // travei aqui, pelo que parece estão funcionando menos o quinto teste. Já tentei muito...
 return 
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
 let maiorIdade = prompt("Você é maior de idade?")
 let educacao = prompt("Você possui ensino médio completo?")
 let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
 let requisitos = "sim"
//  inscricaoValida = "sim"
//  let resultado = requisitos && maiorIdade && educacao && disponibilidade
  // let inscricaoValida = maiorIdade && educacao && disponibilidade && requisitos
 console.log(maiorIdade == educacao == disponibilidade == requisitos)
 // testei de várias formas, mas não saiu tudo correto...
}