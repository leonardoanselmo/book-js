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