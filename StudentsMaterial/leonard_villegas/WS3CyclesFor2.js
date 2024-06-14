/*
2. Ejercicio 2: Calcular la Suma de los Primeros N Números
   - Descripción: Escribe un programa que use un ciclo `for` para calcular la suma de los primeros `N` números (por ejemplo, del 1 al 100).
*/
const prompt = require("prompt-sync")({ sigint: true });

console.log("Calcular la suma de una secuencia de números");

const limit = parseInt(prompt("ingrese el valor máximo de la secuencia: "));

let sum = 0;
for (let i = 1; i <= limit; i++) {
  sum += i;
}

console.log(`La suma de los primeros ${limit} números es ${sum}`);