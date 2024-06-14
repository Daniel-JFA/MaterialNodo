/*
1. Ejercicio 1: Imprimir Números del 1 al 10
   - Descripción: Escribe un programa que use un ciclo `for` para imprimir los números del 1 al 10.
*/
console.log("Imprimir números del 1 al 10")
let numbers = Array()
for (let i = 1; i < 11; i++) {
  numbers.push(i)
}
console.log(numbers.join(" "))