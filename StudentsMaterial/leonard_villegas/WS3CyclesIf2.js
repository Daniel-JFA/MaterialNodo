/*
2. Ejercicio 2: Edad para Votar
   - Descripción: Escribe un programa que lea la edad de una persona y determine si es elegible para votar (mayor o igual a 18 años).
*/

const prompt = require("prompt-sync")({ sigint: true });

const age = parseInt(prompt("Ingrese su edad "));
let response;

if (age >= 18) {
  response = "es elegible para votar";
} else {
  response = "no es elegible para votar";
}
console.log(`El usuario con edad ${age} ${response}`)
