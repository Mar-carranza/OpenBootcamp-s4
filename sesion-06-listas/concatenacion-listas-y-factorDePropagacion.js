// Cómo unir dos listas .concat(lista2)

const lista1 = ['Hola', 2, false, null];
const lista2 = ['adios', 8, true, undefined]

console.log(lista1.concat(lista2)) //[ 'Hola', 2, false, null, 'adios', 8, true, undefined ]
console.log(lista1)//  => No muta los valores  //[ 'Hola', 2, false, null ]

const lista3= lista1.concat(lista2)
console.log(lista3) //[ 'Hola', 2, false, null, 'adios', 8, true, undefined ]

//Como unir dos listas con el factor de propagación
console.log(...lista3) //Hola 2 false null adios 8 true undefined

const lista4 = [...lista1, ...lista2];
console.log(lista4); //[ 'Hola', 2, false, null, 'adios', 8, true, undefined ]
//otenemos una lista

//ERROR!! Mal entendido
const lista5= [lista1, lista2];
console.log(lista5) //[ [ 'Hola', 2, false, null ], [ 'adios', 8, true, undefined ] ]
//obtenemos una lista de dos elementos dentro 