console.log(document.title);
document.title = 'Playeras Posting';
console.log(document.title);
console.log(document.body);
var h1 = document.getElementsByTagName('h1');

h1[0].innerHTML = 'Player Posting Shop';
console.log(h1);

var boton = document.getElementById('boton');
console.log(boton);

boton.addEventListener('click', mensaje);

function mensaje(){
    alert('Mensaje');
}