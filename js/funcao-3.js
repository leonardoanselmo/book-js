// Crie uma função para verificar se um valor é Truthy
function valorTruthy(valor){
  if(!!valor) {
    return 'O valor informado é Truthy!';
  } 
  return 'O valor não é Truthy!';
}
console.log(valorTruthy(3));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function areaQuadrado(base, altura) {
  return `A área do quadrado informado é: ${base*altura}`;
}
console.log(areaQuadrado(3, 4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Léo', 'Ansélmo'));

// Crie uma função que verifica se um número é par
function numPar(numero){
  if((numero % 2) === 0) {
    return `O número: ${numero} informado é par!`;
  } else {
    return `O número: ${numero} informado NÃO É PAR!`;
  }
}
console.log(numPar(7));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDados(tipo) {
  return `O tipo de dado informado é: ${typeof tipo}`;
}
console.log(tipoDados(true));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

function nomeCompleto2(){
  return console.log('Léo Ansélmo');
}

addEventListener('scroll', nomeCompleto2);

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {  
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
