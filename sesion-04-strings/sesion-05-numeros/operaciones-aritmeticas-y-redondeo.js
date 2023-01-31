//Principales operaciones aritméticas
let a = 3.5;
let b = 4.8;
//suma
console.log(a + b)
//resta
console.log(a - b);
//multiplicacion 
console.log(a * b);
//division
console.log(a / b)

//Representacion de los numeros en string
console.log(typeof a) //number
let a_s = a.toString()
console.log(a_s)
console.log(typeof a_s) //string

//Redondeo de numeros decimales
let c = 3.3;
let d = c * 3;
let e = 198.1234567897;
let f = 223587694
console.log(d) //9.8999999

//.toFixed //limita el numero de decimales  - lo convierte a string
//si el numero no tiene , le agrega 
console.log(d.toFixed(1));
console.log(typeof d.toFixed(4)); //string

//.toPrecision -- Limita el numero de cifras significativas
console.log(e.toPrecision(7))
console.log(f.toPrecision(7))

console.log(typeof f.toPrecision(3)) // string