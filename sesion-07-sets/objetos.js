// Trabajando con objetos
const obj = {
    id: 4,
    nombre: 'Juan',
    apellido: 'Gonzalez',
    isDeveloper: true,
    libros_favoritos: ['El metodo', 'El codigo de la manifestacion'],
    '4-juegos': [1, 2, 3, 4]
}

console.log(obj["4-juegos"] ) //[ 1, 2, 3, 4 ]
console.log(obj.id) //4

//acceder a propiedades a traves de variables
const prop = 'isDeveloper'
console.log(obj[prop])

//replicar el obj, cualquier cambio que hagamos en el objeto tambien se aplicara en el objeto inicial 

const obj2 = obj;
console.log(obj2);

obj2.nombre = 'Iñigo';
console.log(obj2.nombre); //Iñigo
console.log(obj.nombre); //Iñigo
//igualar valores o elementos primitivos (number) hace copia y almacena en otro lugar de la memoria
let val1 = 4;
let val2 = val1

val2 = 6;
console.log(val1);//4
console.log(val2); //6

////////////////////

const obj3 = {...obj };

console.log(obj.nombre) //  Iñigo
console.log(obj3.nombre) // Iñigo

obj3.nombre = 'Gorka'

console.log(obj.nombre); //Iñigo
console.log(obj3.nombre); //Gorka

///Como ordenar listas de objetos en funcion de una propiedad

const listaPeliculas= [
    { titulo: 'Lo que el viento de llevo', anyo: 1939},
    { titulo: 'Titanic', anyo: 1997},
    { titulo: 'Moana', anyo: 2016},
    { titulo: 'El efecto mariposa', anyo: 2004},
    { titulo: 'ted', anyo : 2012}
];

console.log(listaPeliculas)
// para ordenar metodo .sort() => Muta el valor de la lista original

listaPeliculas.sort((a, b) => a.anyo - b.anyo);
console.log(listaPeliculas) //ordenada por año de menor a mayor