/*
1. Ejercicio 1: Contar hasta que se Ingrese un Número Mayor a 10
   - Descripción: Escribe un programa que continúe pidiendo al usuario que ingrese un número hasta que el número ingresado sea mayor a 10.
*/

const prompt = require("prompt-sync")({ sigint: true });
console.log("Ingrese números hasta que el número ingresado sea mayor a 10");
let currentNum;
do {
  currentNum = parseInt(prompt("Ingrese un número: "));
} while (currentNum <= 10);
console.log("fin...")
