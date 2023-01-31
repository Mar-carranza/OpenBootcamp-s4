//Iterar los valores de una lista
const array = ['Hola', 2, 5, 90, false, undefined];

for (let i = 0; i < array.length ; i++) {
    console.log(array[i]) //todos los valores del array
}

//forma ES6 (mas eficiente) .forEach()
let suma = 0
const arrayNums = [3, 6, 2, 77, 2, 3, 93,19]
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor) //variable con todos los elementos
})
console.log(suma)

// Búsqueda de un valor dentro de una lista .find()
//Quiero encontrar el elemento 90
const variable = array.find(valor =>{
    if (valor === 90) {
        return true
    }
})
console.log(variable)

const listaObjetos = [
    { nombre: 'Leire', edad: 35},
    { nombre: 'Gorka', edad: 34},
    { nombre: 'Miguel', edad: 28},
    { nombre: 'Lucia', edad: 3},
    { nombre: 'Amaia', edad: 29}
]
/*
const objeto = listaObjetos.find(o => {
    if (o.nombre === 'Miguel') {
        return true
    }
})
console.log(objeto.edad) //28
*/

const objeto = listaObjetos.find(o =>o.nombre ==='Miguel')
console.log(objeto.edad) //28

const { edad } = listaObjetos.find(o=> o.nombre ==='Miguel')
console.log(edad)

