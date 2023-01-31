//sesion 4 - String  (cadenas de caracteres)
let str = 'Hola soy un texto';

console.log(str);

let str_comillas = 'El otro dia me dijo literalmente \'ve a sacar la basura\'' //utilizar backslash para utilizar comillas dentro de un string
let str_comillas_simples = 'El otro dia me dijo literalmente "ve a sacar la basura"'

console.log(str_comillas);
console.log(str_comillas_simples);

// Comillas invertidas (backticks)
let str_backticks = `Esto es un string con backticks`
//introducir variables dentro del texto
let nombre = 'Maria';
let saludo = `hola, ${nombre} Bienvenida`;
 
console.log(saludo);

//Plantillas html (permite saltos de linea)
let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p>esto es un parrafo</p>
</html>
`

console.log(plantilla);

//Introduccion de variables en html
let libros = ['Empieza por el porque', 'El monje que vendio su ferrari', 'el poder del ahora']

