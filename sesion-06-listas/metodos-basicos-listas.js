//como trabajar con listas (arrays)
let var1 = {id: false};
let array = [1, 'hola', false, {id: 5}, null , undefined];

console.log(array) //todos los elementos del array

//Acceder a los valores del array a través de su posicion
//array[indice] => 0, 1, 2, 3, ...
console.log(array[0]) //1
console.log(array[1]) //hola
console.log(array[2]) //false
console.log(array[3]) //{id: 5}

//Métodos para introducir nuevos elementos 
// .push() .unshift() => Mutan el valor de nuestro array

//valores al final => .push()
array.push('final', 45, false)
console.log(array)

//Valores al principio => .unshift()
array.unshift('Inicio', 88)
console.log(array)

//Metodos para eliminar valores 
// .pop() .shift() => Mutan el valor del array
const array2 = [1, 3, 'hola', false]
//valores al final => .pop()
array2.pop()
console.log(array2)

//valores al principio
array2.shift()
console.log(array2);

//Método para eliminar, modificar o añadir valores al array
// .splice (x,y,z)

const array3 = [1, 2,3,4,5,6]
//Eliminar => .splice(indice, numValoresAEliminar)
array3.splice(2, 2 ) //apartir del indice 2 elimina 2 valores
console.log(array3)

//añadir => .splice(indice, 0, valores)
array3.splice(2, 0, 'hola')//  a partir del indice 2 no borres nada agrega
console.log(array3)

//modificar  .splice(indice,1, valores)
array3.splice(2, 1, 3)
console.log(array3)
