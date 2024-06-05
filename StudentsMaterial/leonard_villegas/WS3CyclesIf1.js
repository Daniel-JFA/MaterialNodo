/*
1. Ejercicio 1: Número Positivo, Negativo o Cero
   - Descripción: Escribe un programa que lea un número del
   usuario y determine si es positivo, negativo o cero.
*/

const prompt = require("prompt-sync")({ sigint: true });

const num = parseFloat(prompt("Ingrese un número "));
let response;
if (num == 0) {
  response = "cero";
} else if (num > 0) {
  response = "positivo";
} else {
  response = "negativo";
}
console.log(`El número ${num} es ${response}`)
