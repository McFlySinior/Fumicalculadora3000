
const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonEqual = document.getElementsByName('data-equal')[0];
const botonDelete = document.getElementsByName('data-delete')[0];

const result = document.getElementById('result');


let opeActual = '';
let opeAnterior = '';
let operacion = undefined;


botonNumeros.forEach(function (boton) {
  boton.addEventListener('click', function () {
    agregarNumero(boton.innerText);
  });
});


botonOpera.forEach(function (boton) {
  boton.addEventListener('click', function () {
    selectOperacion(boton.innerText);
  });
});


botonEqual.addEventListener('click', function () {
  calcular();
  actualizarDisplay();
});

botonDelete.addEventListener('click', function () {
  clear();
  actualizarDisplay();
});


function agregarNumero(num) {
  opeActual = opeActual.toString() + num.toString();
  actualizarDisplay();
}

function selectOperacion(op) {
  if (opeActual === '') return;
  if (opeAnterior !== '') {
    calcular();
  }
  operacion = op;
  opeAnterior = opeActual;
  opeActual = '';
}

function calcular() {
  let calculo;
  const anterior = parseFloat(opeAnterior);
  const actual = parseFloat(opeActual);
  if (isNaN(anterior) || isNaN(actual)) return;

  switch (operacion) {
    case '+':
      calculo = anterior + actual;
      break;
    case '-':
      calculo = anterior - actual;
      break;
    case 'x':
      calculo = anterior * actual;
      break;
    case '/':
      calculo = anterior / actual;
      break;
    default:
      return;
  }

  opeActual = calculo;
  operacion = undefined;
  opeAnterior = '';
}

function clear() {
  opeActual = '';
  opeAnterior = '';
  operacion = undefined;
}

function actualizarDisplay() {
  result.value = opeActual || '0';
}

clear();
actualizarDisplay();