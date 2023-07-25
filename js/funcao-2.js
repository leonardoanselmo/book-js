function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    console.log('Por favor preencha um número');
  } else if(idade >= 60){
    console.log('É idoso!');
  } else {
    console.log('Não é idoso!');
  }  
}

terceiraIdade(5);

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(20));