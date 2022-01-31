//Ingresa la temperatura
let temperatura = prompt("Ingrese temperatura en celcius")
let temp = parseInt(temperatura)

//Calculos
let kelvin = temp + 275.15
let fahre = (temp * 9/5) +32

//Muestra resultado
console.log(`La temperatura ingresada en Celcius es ${temp}, en Kelvin seria en ${kelvin} y en Fahrenheit seria ${fahre}`)