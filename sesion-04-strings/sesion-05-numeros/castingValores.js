//Operador .valueOf()- Obtener valores numericos a partir de literaes
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b); //5

console.log(b.valueOf()); //3

let str = new String('Hola soy un String');
console.log(str); //0: 'h', 1: 'o', 2: 'l'...
console.log(str.valueOf()); //Hola soy un String

//NaN (Not a Number)- Infinity
let n = Number('adios');
console.log(n); //Nan

console.log(isNaN(n)); //true

let numerador = 19;
let divisor = 0;
let divisor2 = null;

console.log(numerador / divisor); //Infinity . cuando estemos diviendo entre un valor 0
console.log(numerador  / divisor2); //Infinity

//Como convertir los string a valores numericos con Number, parseInt y parseFloat
//number
let numero = '5.89';
let num2 = 17.2;
console.log(typeof numero); //string
console.log(numero + num2); //Error de concepto

console.log(Number(numero) + num2); //23.09  Nos permite convertir 

//parseInt Convirtiendo el valor a un entero
console.log(parseInt(numero));

//parseFloat tambien obtiene los decimales
console.log(parseFloat(numero)); //

//Números exadecimales  (base 16) Siempre empiezan po 0x
let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16)); //239031

//Obtener los valores máximo y mínimo en js
let minPrecision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(minPrecision); //2.224469...
console.log(min_valor_JS);
console.log(max_valor_JS)
