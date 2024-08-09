// Ejercicios con `if`

// 1. Ejercicio 1: Número Positivo, Negativo o Cero
//    - Descripción: Escribe un programa que lea un número del usuario y determine si es positivo, negativo o cero.

const prompt1 = require("prompt-sync")({ sigint: true });

const numero = parseFloat(prompt1("Ingresa un número: "));

let response;

if (numero > 0) {
  response = "positivo";
} else if (numero < 0) {
  response = "negativo";
} else {
  response = "cero";
}

console.log(`El número ${numero} es ${response}.`);

// 2. Ejercicio 2: Edad para Votar
//    - Descripción: Escribe un programa que lea la edad de una persona y determine si es elegible para votar (mayor o igual a 18 años).

const prompt2 = require("prompt-sync")({ sigint: true });

const edad = parseInt(prompt2("Ingresa tu edad: "), 10);

if (edad >= 18) {
  console.log("Eres elegible para votar.");
} else {
  console.log("No eres elegible para votar.");
}

// 3. Ejercicio 3: Determinar el Mayor de Tres Números
//    - Descripción: Escribe un programa que lea tres números del usuario y determine cuál es el mayor.

const prompt3 = require("prompt-sync")({ sigint: true });

const num1 = parseFloat(prompt3("Ingresa el primer número: "));
const num2 = parseFloat(prompt3("Ingresa el segundo número: "));
const num3 = parseFloat(prompt3("Ingresa el tercer número: "));

const mayor = Math.max(num1, num2, num3);

console.log(`El número mayor es ${mayor}.`);
