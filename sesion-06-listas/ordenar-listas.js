// Ordenar listas 
///////////////////////////////////.sort() -->modifica el array

const array = [2, 5, 9, 15, 1, 2, 0, 4]

console.log(array) //[ 2, 5, 9, 15, 1, 2, 0, 4 ]
//a representa el anterior b el siguiente. 
array.sort ((a,b) => {
 //   return  -1 //invierte el orden
    if (a < b) {
        return -1
    } else if (a > b) {
        return + 1
    } else {// a === b
        return 0
    }
})

console.log(array)


//Ordenar unicamente array numerico

const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546]

arrayNumerico.sort((a,b) => a - b)
console.log(arrayNumerico)

//Array de objetos

const listaObjetos = [
    { nombre: 'Leire', edad: 35},
    { nombre: 'Gorka', edad: 34},
    { nombre: 'Miguel', edad: 28},
    { nombre: 'Lucia', edad: 3},
    { nombre: 'Amaia', edad: 29}
]

/*
listaObjetos.sort((a, b) => {
    if (a.edad < b.edad) {
        return - 1
    } else if (a.edad > b.edad) {
        return + 1 
    } else {
        return 0
    }
}) 
*/
//simplificado
listaObjetos.sort((a,b) => a.edad - b.edad)


console.log(listaObjetos)
/*
[ { nombre: 'Lucia', edad: 3 },
  { nombre: 'Miguel', edad: 28 },
  { nombre: 'Amaia', edad: 29 },
  { nombre: 'Gorka', edad: 34 },
  { nombre: 'Leire', edad: 35 } ]
*/