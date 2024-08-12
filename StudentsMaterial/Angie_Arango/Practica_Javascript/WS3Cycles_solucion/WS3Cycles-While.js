// Ejercicios con `while`

// 1. Ejercicio 1: Contar hasta que se Ingrese un Número Mayor a 10
//    - Descripción: Escribe un programa que continúe pidiendo al usuario que ingrese un número hasta que el número ingresado sea mayor a 10.

const promptWhile1 = require("prompt-sync")({ sigint: true });

let num4;

do {
  num4 = parseInt(
    promptWhile1("Ingresa un número (mayor a 10 para salir): "),
    10
  );
} while (num4 <= 10);

console.log(`El número ingresado es ${num4}, que es mayor a 10.`);

// 2. Ejercicio 2: Adivinar un Número
//    - Descripción: Escribe un programa que elija un número aleatorio entre 1 y 100, y luego continúe pidiendo al usuario que adivine el número hasta que lo adivine correctamente.

const promptWhile2 = require("prompt-sync")({ sigint: true });

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let adivinanza;
let intentos = 0;

do {
  adivinanza = parseInt(promptWhile2("Adivina el número entre 1 y 100: "), 10);
  intentos++;

  if (adivinanza > numeroAleatorio) {
    console.log("El número es más pequeño.");
  } else if (adivinanza < numeroAleatorio) {
    console.log("El número es más grande.");
  } else {
    console.log(`¡Correcto! Adivinaste el número en ${intentos} intentos.`);
  }
} while (adivinanza !== numeroAleatorio);

// 3. Ejercicio 3: Contar Dígitos de un Número
//    - Descripción: Escribe un programa que use un ciclo `while` para contar la cantidad de dígitos de un número ingresado por el usuario.

const promptWhile3 = require("prompt-sync")({ sigint: true });

const num5 = promptWhile3("Ingresa un número: ");
let cantidadDeDigitos = 0;
let temp = num5;

while (temp > 0) {
  temp = Math.floor(temp / 10);
  cantidadDeDigitos++;
}

console.log(`El número ingresado tiene ${cantidadDeDigitos} dígitos.`);
