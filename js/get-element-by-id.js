const el = document.getElementById('one');
el.className = 'cool';

const newEl = document.createElement('li');
newEl.className = 'cool';
const newText = document.createTextNode('quinoa');

newEl.appendChild(newText);

const list = document.querySelector('ul');
console.log(list);

list.appendChild(newEl);

// const position = document.getElementsByTagName('ul')[0];
// console.log(position);
// position.appendChild(newEl);

