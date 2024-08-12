// Ejercicios con `for`

// 1. Ejercicio 1: Imprimir Números del 1 al 10
//    - Descripción: Escribe un programa que use un ciclo `for` para imprimir los números del 1 al 10.

console.log("Imprimir números del 1 al 10");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Ejercicio 2: Calcular la Suma de los Primeros N Números
//    - Descripción: Escribe un programa que use un ciclo `for` para calcular la suma de los primeros `N` números (por ejemplo, del 1 al 100).

const promptFor2 = require("prompt-sync")({ sigint: true });

const N = parseInt(promptFor2("Ingresa un número: "), 10);

let suma = 0;
for (let i = 1; i <= N; i++) {
  suma += i;
}

console.log(`La suma de los primeros ${N} números es ${suma}.`);

// 3. Ejercicio 3: Tabla de Multiplicar
//    - Descripción: Escribe un programa que use un ciclo `for` para imprimir la tabla de multiplicar de un número ingresado por el usuario.

const promptFor3 = require("prompt-sync")({ sigint: true });

const num = parseInt(
  promptFor3("Ingresa un número para imprimir su tabla de multiplicar: "),
  10
);

console.log(`Tabla de multiplicar de ${num}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}
