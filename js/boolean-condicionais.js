var possuiGraduacao = false;

if(possuiGraduacao) {
  console.log('Possui gradução!');
} else {
  console.log('Não possui graduação!')
}

var nome = '';

// Quando declara uma variavel como vazia o condicional é FALSE.
if(nome) {
  console.log('Nome existe: '+nome);
} else {
  console.log('Nome não existe');
}

// Verifica se um valor é truthy ou falsy
// O primeiro ! faz a negação e o !! faz a confirmação da expressão.
console.log(!!(10 < 10));
console.log(!!(12 > 10));

var curso1 = 'HTML 5';
var tamCurso1 = curso1.length;

var curso2 = 'Javascript';
var tamCurso2 = curso2.length;

// Aqui está confirmando se a qtde de letras do curso1 é maior que o curso2, usando o !!.
console.log(!!(tamCurso1 > tamCurso2));

var x = '10';
console.log(x === 10);

// Operador !== (corresponde a diferente.)
var animal = 'Gatos';
console.log(animal !== 'Gato');

// Operadores lógicos
// A primeira condição é ZERO e por isso é FALSE
if((5-5) && (5+5)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// Resultado aqui é 10 que é um valor Truthy
if((5-10) && (5+5)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

var condicional2 = (5 - 5) || (5 + 5) || (10 -2);
console.log(condicional2);

var corFavorita = 'red';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol');
    break;
  default:
    console.log('Feche os olhos');
}

var minhaIdade = 44;
var idadeIrmao = 46;

if(minhaIdade > idadeIrmao){
  console.log('É maior!');
} else if(minhaIdade === idadeIrmao) {
  console.log('É igual');
} else {
  console.log('É menor!');
}

var expressao = (5-2) && (5 - '') && (5-2);
console.log(expressao);

var nome = 'Léo';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

var brasil = 207;
var china = 1340;

if(brasil > china){
  console.log('Brasil tem mais habitantes');
} else {
  console.log('Brasil tem menos habitantes');
}

if(('Gato' === 'gato') && (5 > 2)){
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

if(('Gato' === 'gato') || (5 > 2)){
  console.log('Gato' && 'Cão'); // Sempre vai mostrar a ultima verdadeira.  
} else {
  console.log('Falso');
}