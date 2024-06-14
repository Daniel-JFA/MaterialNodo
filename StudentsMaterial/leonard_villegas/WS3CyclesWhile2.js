/*
2. Ejercicio 2: Adivinar un Número
   - Descripción: Escribe un programa que elija un número aleatorio entre 1 y 100, y luego continúe pidiendo al usuario que adivine el número hasta que lo adivine correctamente.
*/
const prompt = require("prompt-sync")({ sigint: true });
// Generar un número aleatorio
const randomNum = parseInt(Math.floor(Math.random() * 100));
console.log("Adivine un número aleatorio entre 1 y 100");
let guess;
do {
  guess = parseInt(prompt("Ingrese un número: "));
  if (guess < randomNum) {
    console.log("Muy pequeño");
  } else {
    console.log("Muy grande");
  }
} while (guess != randomNum);
console.log("Lo encontró...")