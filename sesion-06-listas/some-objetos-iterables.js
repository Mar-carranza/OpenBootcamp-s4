//.some()
const array = [3, 7, 2, 4, 42, 7865, -2];

const res = array.some(valor => valor < -0)
console.log(res) //true

const existe = array.some(valor => valor === 90);
console.log(existe) //false


const listaObjetos = [
    { nombre: 'Leire', edad: 35},
    { nombre: 'Gorka', edad: 34},
    { nombre: 'Miguel', edad: 28},
    { nombre: 'Lucia', edad: 3},
    { nombre: 'Amaia', edad: 29}
]

const existeJuan = listaObjetos.some(persona => persona.nombre === 'Juan')
console.log(existeJuan) //false

// Como obtener una lista a partir de un objeto iterable
const str = 'Hola, soy Maria'
console.log(str[6]) //s

const ar_str = Array.from(str)
console.log(ar_str) // [ 'H', 'o', 'l', 'a', ',', ' ', 's', 'o', 'y', ' ', 'M', 'a', 'r', 'i', 'a' ]

const set = new Set ([2, 3, 'Hola', 4])
const ar_set =  Array.from(set)
console.log(ar_set)//[ 2, 3, 'Hola', 4 ]

//obtener iterable de todos los indices de nuestro array
const keys = array.keys()
console.log(keys) //{ [Iterator] }

const ar_keys = Array.from(keys)
console.log(ar_keys) //[ 0, 1, 2, 3, 4, 5, 6 ]

