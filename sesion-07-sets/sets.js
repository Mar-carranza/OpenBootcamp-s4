//sets o conjuntos 

const array = [1, 2, 3, 4, 5, 6, 1, 'hola', { id: 5 }, 'hola'];

const miSet = new Set(array)

console.log(array); //[ 1, 2, 3, 4, 5 ]
console.log(miSet); //Set { 1, 2, 3, 4, 5 }

//.add()
miSet.add(9);
console.log(miSet) //Set { 1, 2, 3, 4, 5, 6, 'hola', { id: 5 }, 9 }

//.delete
miSet.delete('hola');
console.log(miSet) //Set { 1, 2, 3, 4, 5, 6, { id: 5 }, 9 }

//.clear()
//miSet.clear();
//console.log(miSet) //Set {  }

// .has() si contiene un valor
console.log(array.includes(2)); //true
console.log(miSet.has(4)) //true

// .size (propiedad
console.log(miSet.size) //8

//iteracion dentro de los valores de set
miSet.forEach(valor => {
    console.log(valor) //
})

const it_miSet = miSet.values()
console.log(it_miSet) //{ [Iterator] }

const ar_miSet = [ ...miSet ]
console.log(ar_miSet) // [ 1, 2, 3, 4, 5, 6, { id: 5 }, 9 ]