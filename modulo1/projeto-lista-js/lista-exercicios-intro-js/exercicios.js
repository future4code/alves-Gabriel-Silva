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
  let nome = prompt("Qual o seu nome?")
  let idade = Number(prompt("Qual sua idade"))
  let email = prompt("Digite seu email:")
  texto = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(texto)
  return
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
   let cores =  [cor1, cor2, cor3]
   cor1 = rompt("Digite sua cor favorita:")
   cor2 = rompt("Digite mais uma cor:")
   cor3 = rompt("Digite mais uma cor:")
  console.log(cores)
 return 
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
 resultado = string.toUpperCase()
 return resultado
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}