
INTENTO DE PASAR DE UNA PAGINA A OTRA
//  function siguiente(){
//      let ocultar = document.querySelector ('#pagineOne');
//      ocultar.style.display= none; }



 //INTENTO DE INPUT DONDE IRA EL MENSAJE YA CIFRADO
 
// cajaResultado.addEventListener('click',function(){

//   let caja2 = document.getElementById('resultado').innerText ='cifrar';
//   console.log(caja2); } )



CODIGO FUNCIONANDO PASO A PASO
import cipher from './cipher.js';
console.log(cipher);

// visualizacion de paginas
document.getElementById('pagineOne').style.display = 'block';
document.getElementById('pagineTwo').style.display = 'none';
document.getElementById('pagineThree').style.display = 'none';

//al hacer click en el boton para cambiar de vista 1 a 2
let siguiente = document.getElementById('siguiente');
siguiente.addEventListener('click', pa1);
function pa1() {
  document.getElementById('pagineOne').style.display = 'none';
  document.getElementById('pagineTwo').style.display = 'block';
  document.getElementById('pagineThree').style.display = 'none';
}

// cambio de 2 a 3
let siguiente2 = document.getElementById('btnN1');
siguiente2.addEventListener('click', botonNext);
function botonNext() {
  document.getElementById('pagineOne').style.display = 'none';
  document.getElementById('pagineTwo').style.display = 'none';
  document.getElementById('pagineThree').style.display = 'block';

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


//CREAR A TRAVES DE UN FOR, EL CIFRADO DE UNA FRASE
// const cifrar = document.getElementById('botCif');
// cifrar.addEventListener('click', function () {
//   let codigo = document.getElementById('ingresarCodigo').value;
//   let numero = parseInt(document.getElementById('ingresarNumero').value); //La función parseInt() analiza una cadena y devuelve un número entero
//   console.log(typeof numero);
 
//   let encode = codigo.toUpperCase();//pasar a mayuscula

//   for (let i = 0; i < encode.length; i++) {

//     let ASCII1 = encode.charCodeAt(i);//posicion en ASCII
//     console.log(ASCII1);

//     let formula = ((ASCII1 - 65 + numero) % 26 + 65);//posicion en el alfabeto con el offset
//     console.log(formula);

//     let resultado2 = String.fromCharCode(formula); // nueva letra cifrada
//     console.log(resultado2);

   
//     //RESULTADO CON INNER DE FORMA DINAMICA
//   let pR = document.getElementById('resultadoText');
//   pR.innerHTML += resultado2;

//   }

// }
// )
 


  // if( ASCII1>= 65 && ASCII1<=90){ //si es mayuscula
        //     let formula = ((ASCII1 - 65 + numberC) % 26 + 65); //posicion en el alfabeto con el offset          
        //     let newASCII1 = String.fromCharCode(formula).toUpperCase; //nueva letra cifrada
            
        // }

        // else if( ASCII1>= 97 && ASCII1<=122){ //si es minuscula
        //     let formula = ((ASCII1 - 97 + numberC) % 26 + 97);//posicion en el alfabeto con el offset
        //     let newASCII1 = String.fromCharCode(formula).toLowerCase; //
        // }
        
        // else{ 
        //     finalText1 += newASCII1;
            
        //   }