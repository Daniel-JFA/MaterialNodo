/*
Ejercicio 3: Tabla de Multiplicar
   - Descripción: Escribe un programa que use un ciclo `for` para imprimir la tabla de multiplicar de un número ingresado por el usuario.
*/
const prompt = require("prompt-sync")({ sigint: true });

const number = parseInt(prompt("Ingrese el número del cual quiere conocer la tabla de multiplicar: "));

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}