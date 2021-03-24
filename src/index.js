import cipher from './cipher.js';
console.log(cipher);

//Pagina inicio -> Pagina cifrado
let homeNext = document.getElementById('siguiente');
homeNext.addEventListener('click',() =>{
   document.getElementById('pagineOne').style.display = 'none';
   document.getElementById('pagineTwo').style.display = 'block';
   document.getElementById('pagineThree').style.display = 'none';
   }
)

//Pagina inicio <- Pagina cifrado
let p1Back = document.getElementById('back1');
p1Back.addEventListener('click',() =>{
   document.getElementById('pagineOne').style.display = 'block';
   document.getElementById('pagineTwo').style.display = 'none';
   document.getElementById('pagineThree').style.display = 'none';
   }
)
// Pagina cifrado -> Pagina descifrado
let p1Next = document.getElementById('btnN1');
p1Next.addEventListener('click', ()=>{
  document.getElementById('pagineOne').style.display = 'none';
  document.getElementById('pagineTwo').style.display = 'none';
  document.getElementById('pagineThree').style.display = 'block';
}
)
// Pagina cifrado <- Pagina descifrado
let p2Back = document.getElementById('back2');
p2Back.addEventListener('click', ()=>{
  document.getElementById('pagineOne').style.display = 'none';
  document.getElementById('pagineTwo').style.display = 'block';
  document.getElementById('pagineThree').style.display = 'none';
}
)
// Pagina descifrado -> Pagina inicio
let p2Next = document.getElementById('btnN2');
p2Next.addEventListener('click', ()=>{
  document.getElementById('pagineOne').style.display = 'block';
  document.getElementById('pagineTwo').style.display = 'none';
  document.getElementById('pagineThree').style.display = 'none';
}
)


// MODULARIZAR
const cifrar = document.getElementById('botCif');
cifrar.addEventListener('click', function () { //ejemplo de funcion 
  let code1 = document.getElementById('ingresarCodigo').value;
  let numberC = parseInt(document.getElementById('ingresarNumero').value); //La función parseInt() analiza una cadena y devuelve un número entero
  let codeC = code1.toUpperCase();//codigo paso a mayuscula

  let cifrado = cipher.encode(codeC, numberC);
  let showme1 = document.getElementById('resultadoText');
  showme1.value += cifrado; //El operador += agrega un valor a una variable o concatena
}
)

const descifrar = document.getElementById('botDesc');
descifrar.addEventListener('click', function () {
  let codeI2 = document.getElementById('ingresarCodigo2').value;
  let numberD = parseInt(document.getElementById('ingresarNumero2').value); //La función parseInt() analiza una cadena y devuelve un número entero
  let codeD = codeI2.toUpperCase();//codigo paso a mayuscula

  let descifrado = cipher.decode(codeD, numberD);
  let showme = document.getElementById('resultadoText2');
  showme.value += descifrado;
}
)

// showme.innerHTML+= descifrado; //no funciona en input
