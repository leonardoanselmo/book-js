// Retorna a altura do browser
console.log(window.innerHeight);
// window.alert('Uma janela'); 

const href = window.location.href;

console.log(href);
const titulo = document.querySelector('h1');
titulo.innerHTML += ' texto acrescentado.';

console.log(titulo);

function callback1() {
  console.log('Clicou em: '+titulo.innerHTML);
}

titulo.addEventListener('click', callback1);

// Retorne o url da página atual utilizando o objeto window
console.log(window.location.href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo');
console.log(elementoAtivo);

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);

// Retorne a largura da janela 
