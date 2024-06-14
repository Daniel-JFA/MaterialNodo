/*
3. Ejercicio 3: Contar Dígitos de un Número
   - Descripción: Escribe un programa que use un ciclo `while` para contar la cantidad de dígitos de un número ingresado por el usuario.
*/
const prompt = require("prompt-sync")({ sigint: true });
const num = prompt("ingrese un valor numérico");
index = 0;
while (num[index] !== undefined) {
  index++;
}
console.log(`El número tiene ${index} dígitos`)
