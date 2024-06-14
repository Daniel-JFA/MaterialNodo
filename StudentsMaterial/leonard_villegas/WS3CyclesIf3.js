/*
3. Ejercicio 3: Determinar el Mayor de Tres Números
   - Descripción: Escribe un programa que lea tres números del usuario y determine cuál es el mayor.
*/

const prompt = require("prompt-sync")({ sigint: true });
console.log("Escriba tres números")

const n1 = parseFloat(prompt("Número 1: "));
const n2 = parseFloat(prompt("Número 2: "));
const n3 = parseFloat(prompt("Número 3: "));
const numbers = Array(n1, n2, n3);

console.log(`El número mayor es ${Math.max(...numbers)}`)