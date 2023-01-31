let nombre = 'Maria';
let apellido = 'Carranza';
let estudiante = nombre + ' ' + apellido;
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let cantidad = estudiante.length;
console.log(cantidad);

let primeraLetra = nombre.charAt(0);
console.log(primeraLetra);

let ultimaLetra = apellido.slice(-1);
console.log(ultimaLetra);

let eliminarEspacio = estudiante.replace(/ /g, '');
console.log(eliminarEspacio);

let nombreEnEstudiante = estudiante.includes(nombre);
console.log(nombreEnEstudiante)