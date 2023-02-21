//Trabajando con fechas

const fecha = new Date()
console.log(fecha) //fecha actual

//Otra manera ///Los meses comienzan en 0 y dic 11
const fecha2 = new Date(1987, 10, 20,1,23,52)
console.log(fecha2)  //Fri Nov 20 1987 01:23:52 GMT+0100 (hora estándar de Europa central)
// en milisegundos ----tambien pueden ser negativos
const fecha3 = new Date(0)
console.log(fecha3) // Thu Jan 01 1970 01:00:00 GMT+0100 (hora estándar de Europa central)
//Definir fecha a traves de string
const fecha4= new Date('October 13, 1979 12:15:15')
console.log(fecha4) //Sat Oct 13 1979 12:15:15 GMT+0100 

//Que fecha es mayor
console.log(fecha > fecha2) //true

const fecha5 = new Date(1987, 10, 20,1,23,52)

console.log(fecha2 === fecha5) //ERROR no se puede comprar fechas de esta manera para comprobar hay que pasarlas a milisegundos
// .getTime (convierte a milisegundo)
console.log(fecha2.getTime() === fecha5.getTime()) //TRUE

///Obtener el dia el mes y el año de una fecha
// .getDate obtiene el dia
console.log(fecha2.getDate()) //20

// .getMonth Obtener el mes --> 0 - Enero, 11 - Diciembre
console.log(fecha2.getMonth() + 1) //11

// .getFullYear()
console.log(fecha2.getFullYear()) //1987


//Como mostrar fecha en un string
console.log(fecha2)
// .toLocalDateString
// 
console.log(fecha2.toLocaleDateString('en-GB')) //20/11/1987
