var pessoa = {
  nome: 'Léo',
  idade: 44,
}

console.log(pessoa.nome, pessoa.idade);

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado){
    return lado * this.lados;
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(typeof pessoa);

// Verifica se existe a propriedade: lados no objeto quadrado.
console.log(quadrado.hasOwnProperty('lados'));