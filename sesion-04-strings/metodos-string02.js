let input = 'ESCorpio';
let db = 'escorpio';

//toLowerCase() - toUpperCase()
console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());

//formas de concatenar strings
let str_1= 'Primer String.';
let str_2 = 'Segon String';

console.log(str_1.concat(' ', str_2));
console.log(str_1 + ' ' + str_2);
console.log(`${str_1} ${str_2}`)

//Eliminar espacios al inicio y al final
let str_3 = '  Soy un string con espacios al final    ';
console.log(str_3.length);
//trim()
console.log(str_3.trim().length);
console.log(str_3.trimEnd().length);
console.log(str_3.trimStart().length)

//Obtener la letra que hay en cierta posicion
let str_4  = 'Hola soy string numero 4';

console.log(str_4.charAt(5));
console.log(str_4[5]);

//Obtener la posicion de una palabra dentro de un string
//Aunque exista dos veces la palabra dara la posicion de la primera, si quiero la ultima lastIndexOf()
let str_5 = 'Hola soy Maria y me gusta aprender a programar. Mi nombre es Maria'
//si no encuentra la palabra devolvera -1
console.log(str_5.indexOf('Maria'));
console.log(str_5.charAt(9))
console.log(str_5.lastIndexOf('Maria'))