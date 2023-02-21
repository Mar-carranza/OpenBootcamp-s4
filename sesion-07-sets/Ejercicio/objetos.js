//Objetos.js

const datos = {
    nombre: 'Maria',
    apellido: 'Carranza',
    edad: 34,
    altura: 155,
    eresDesarrollador: true
}

const edad = datos.edad

const lista = [
    {
        ...datos
    }, {
        nombre: 'Carla',
        apellido: 'Alvarez',
        edad: 32,
        altura: 175,
        eresDesarrollador: false  
    }, {
        nombre: 'Alberto',
        apellido: 'Martinez',
        edad: 38,
        altura: 160,
        eresDesarrollador: false  
    }
]

const nuevaLista = lista.sort((a,b) => b.edad - a.edad)
console.log(nuevaLista)

