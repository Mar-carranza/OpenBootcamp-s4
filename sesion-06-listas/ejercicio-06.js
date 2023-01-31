//ejercicio

const listaCompra = ['Patata', 'Cebolla', 'Espinaca', 'Nabo', 'Ajo'];

listaCompra.push('Aceite de Girasol');
console.log(listaCompra)

listaCompra.pop('Aceite de Girasol')
console.log(listaCompra)

const peliculas = [
    { titulo: 'La sal de la vida', director: 'Eugenio Martín', fecha: 1996},
    { titulo: 'Pulp Fiction', director: 'Quentin Tarantino', fecha: 1994 },
    { titulo: 'El padrino ', director: 'Francis Ford Coppola', fecha: 1972 }
];

const peliculasAfter = peliculas.filter(obj => obj.fecha > 2001);
console.log(peliculasAfter)

const peliculasDirectores = peliculas.map((valor => valor.director))
console.log(peliculasDirectores)

const peliculasTitulos = peliculas.map((valor => valor.titulo))
console.log(peliculasTitulos)


const tituloDirector = peliculasTitulos.concat(peliculasDirectores)
console.log(tituloDirector)
const prop = [...peliculasTitulos, ...peliculasDirectores]
console.log(prop)