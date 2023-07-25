var today = new Date();
var year = today.getFullYear();

var el = document.getElementById('footer');
el.innerHTML = `<h1>Ano: ${year}</h1>`;