var videoGames = ['Switch', 'PS4', 'XBox'];
console.log(videoGames, videoGames.length);
// console.log(videoGames.pop());
console.log(videoGames);

for(var i = 0; i < 10; i++){
  console.log(i);
}

for(var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

var i = 0;
while (i < 10) {
   console.log(i);
   i++;
}

videoGames.forEach(function(item){
  console.log(item);
})

var frutas = ['banana', 'maçã', 'pêra', 'abacate'];

frutas.forEach(function(item) {
  console.log(item);
})

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var ganhouCopa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

ganhouCopa.forEach(function(item){
  console.log(`O brasil ganhou a copa de ${item}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

frutas.forEach(function(item){
  console.log(item);
  if(item === 'Pera') {
    console.log('entrei');
    // break; // Não suporta no forEach, tenho que fazer com for
  }
})

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);

var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber!';
console.log(podeBeber);