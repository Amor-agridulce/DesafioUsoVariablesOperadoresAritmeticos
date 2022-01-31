//pedir dos números
let num1 = parseInt(prompt("Ingrese el primer número"))
let num2 = parseInt(prompt("Ingrese el segundo número"))

//deben ser mayores a 0 y diferentes
//suma, resta, division,multi, modulo
let suma = num1 + num2
let resta = num1 - num2
let divi = num1 / num2
let multi = num1 * num2
let modulo = num1 % num2

//resultados
console.log(`los resultados son:
en suma ${suma},
en resta ${resta},
en division ${divi},
en multiplicacion ${multi} y
en modulo ${modulo}
`)