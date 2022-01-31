//Ingresa cantidad de dias
let totalstring = prompt("ingrese cantidad de dias")
let total =parseInt(totalstring)

//Calculos
let anios = Math.floor(total / 365)
let semanas = Math.floor((total % 365) / 7)
let dias = Math.floor((total % 365) % 7)

//Muestra respuesta
console.log(`Equivale a ${anios} años, ${semanas} semanas y ${dias} días`)