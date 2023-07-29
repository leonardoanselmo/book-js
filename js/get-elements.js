// const el = document.getElementById('uno');
// el.classList = 'cool';

const elements = document.getElementsByClassName('padrao');
console.log(elements);

if (elements.length > 2) {
  var el = elements[2];
  el.className = 'cool';
}