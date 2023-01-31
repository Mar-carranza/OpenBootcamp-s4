//Métodos más utilizados con cadenas de caracteres (string)
//como obtener la longitud de un string
let str = 'Hola soy un string'
console.log(str.length)

//Obtener partes de string
//slice() substring() substr()
let slice_str = str.slice(5, 10);
console.log(slice_str)

let substrin_str = str. substring(5,10);
console.log(substrin_str);

//deprecated
let substr_str= str.substr(5,10);
console.log(substr_str);

//Reemplazar parte del contenido de una cadena de texto
let cadena = 'Hola mi nombre es Maria';
console.log(cadena);

console.log(cadena.replace('Maria', 'Marta'));

//Al utilizar string solo reemplaza la priemera instancia
let texto_largo = 'Tito no es un mono cualquiera. a tito bla bla los ... los bla bla bla las nueces que se caen de los arboles';
console.log(texto_largo.replace('los', 'cinco' )) 

//Al utilizar la expresion regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/los/g, 'cinco'));

