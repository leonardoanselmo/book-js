// Crie um objeto com os seus dados pessoais
var dadosPessoais = {
  nome: 'Léo',
  sobrenome: 'Ansélmo',
  idade: 44,
  profissao: 'Desenvolvedor web',  
  nomeCompleto: function () {
    return `Meu nome é: ${this.nome} ${this.sobrenome}`;
  }
}
// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(dadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

console.log(carro.preco);

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir: function(pessoa) {
    if(pessoa === 'homem'){
      return 'Latir';
    } else {
      return 'Nada';
    }
  }
}

console.log(cachorro.latir('menina'));
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

