//Métodos más avanzados
// .map( ) .filter() .reduce()

////////////////////////////////////////.map()
const array = ['San Sebastian', 'Madrid', 'Barcelona', 'Alivante', 'Bilbao'];

const val = array.forEach(v => {
    console.log(v) //Todos los valores del array
})
console.log(val) //undefined
const newArray = array.map((valor, indice) => {
    return `${indice + 1} - ${valor}`
})
console.log(newArray) //['1 - San Sebastian', '2 - 'Madrid' ...]

//simplificado
//const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)

///////////////////////////////////////. filter()

const listaObjetos = [
    { nombre: 'Leire', edad: 35},
    { nombre: 'Gorka', edad: 34},
    { nombre: 'Miguel', edad: 28},
    { nombre: 'Lucia', edad: 3},
    { nombre: 'Amaia', edad: 29}
]
/*
const personasMayores = listaObjetos.filter(obj => {
    if (obj.edad > 30) {
        return true
    } else {
        return false
    }
})
*/
//simplificado
const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores) //solo personas > de 30
//todos menos
const nuevaLista = listaObjetos.filter(obj => obj.nombre !== 'Miguel')
console.log(nuevaLista)

////////////////////////////////////// .reduce()

const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado, current, i, arrayOriginal) => {
    console.log(acumulado) //3, undefined, undefined,undefined,undefined
    console.log(current) //56, 23, 5, 90, 100
    console.log(i) //1, 2, 3, 4, 5
    console.log(arrayOriginal)

    return acumulado + current
})
console.log(suma) //277