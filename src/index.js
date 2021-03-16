import cipher from './cipher.js';
console.log(cipher);

// visualizacion de paginas
document.getElementById('pagineOne').style.display = 'block';
document.getElementById('pagineTwo').style.display = 'none';
document.getElementById('pagineThree').style.display = 'none';

//al hacer click en el boton para cambiar de vista
let siguiente = document.getElementById('siguiente');
siguiente.addEventListener('click', next);

function next() {
  document.getElementById('pagineOne').style.display = 'none';
  document.getElementById('pagineTwo').style.display = 'block';
}

// GUARDAR LOS DATOS INGRESADOS POR UN USUARIO
// const cifrar = document.getElementById('botCif');
// cifrar.addEventListener('click', function(){ 
//   let codigo = document.getElementById('ingresarCodigo').value;
//   let numero = document.getElementById('ingresarNumero').value;
//   console.log(codigo,numero);
// })


// OBTENER EL CODIGO ASCII DE UNA LETRA
// const cifrar = document.getElementById('botCif');
// cifrar.addEventListener('click', function(){ 
//   let codigo = document.getElementById('ingresarCodigo').value;
//   let numero = document.getElementById('ingresarNumero').value;
//   let ASCII1 = codigo.charCodeAt(numero);
//   console.log(ASCII1);
// } )


// PASAR UNA LETRA A CODIGO ASCII, 
//  const cifrar = document.getElementById('botCif');
//  cifrar.addEventListener('click', function(){ 
// let codigo = document.getElementById('ingresarCodigo').value;
// let numero = parseInt(document.getElementById('ingresarNumero').value); //La función parseInt() analiza una cadena y devuelve un número entero
//  console.log(typeof numero);

// let ASCII1 = codigo.charCodeAt();
// console.log(ASCII1);

// let formula = ((ASCII1 - 65 + numero)%26 + 65);
// console.log(formula);

// let resultado2 = String.fromCharCode(formula); //letra cifrada
// console.log(resultado2);

//RESULTADO CON VALUE
//  let final = document.getElementById('resultado');
// final.value = resultado2;
// console.log(final);

// let cajaResultado = document.getElementById('resultado');
// cajaResultado.value = resultado2; 


//RESULTADO CON INNER DE FORMA DINAMICA
// let pR = document.getElementById('resultadoText');
// pR.innerHTML = resultado2;

// CREAR A TRAVES DE UN FOR, EL CIFRADO DE UNA FRASE
const cifrar = document.getElementById('botCif');
cifrar.addEventListener('click', function () {
  let codigo = document.getElementById('ingresarCodigo').value;
  let numero = parseInt(document.getElementById('ingresarNumero').value); //La función parseInt() analiza una cadena y devuelve un número entero
  // console.log(typeof numero);
 
  let encode = codigo.toUpperCase();//pasar a mayuscula

  for (let i = 0; i < codigo.length; i++) {

    let ASCII1 = encode.charCodeAt();//posicion en ASCII
    //console.log(ASCII1);

    let formula = ((ASCII1 - 65 + numero) % 26 + 65);//posicion en el alfabeto con el offset
    console.log(formula);

    let resultado2 = String.fromCharCode(formula); //letra cifrada
    console.log(resultado2);

    resultado += 

    // RESULTADO CON INNER DE FORMA DINAMICA
  let pR = document.getElementById('resultadoText');
  pR.innerHTML += resultado2;


  }


  








})














