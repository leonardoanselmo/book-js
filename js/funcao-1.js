function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4));
console.log(areaQuadrado(8));
console.log(areaQuadrado(16));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.83));

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Eu gosto do céu!';
  } else if (cor === 'verde') {
    return 'Eu gosto da floresta!';
  } else {
    return 'Você não gosta de nada!'
  }
}

console.log(corFavorita('verde'));

//Adicionando uma função como argumento.
addEventListener('click', function() {
  console.log('Você está clicando na página!');
})

function mostraConsole() {
  console.log('Clicou!!!');
}

addEventListener('click', mostraConsole);