// Ejercicios con `switch`

// 1. Ejercicio 1: Determinar el Día de la Semana
//    - Descripción: Escribe un programa que lea un número del 1 al 7 y use una declaración `switch` para determinar el día de la semana correspondiente.

const promptSwitch1 = require("prompt-sync")({ sigint: true });

const dayNumber = parseInt(promptSwitch1("Ingresa un número del 1 al 7: "), 10);

switch (dayNumber) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Número inválido. Ingresa un número del 1 al 7.");
}

// 2. Ejercicio 2: Clasificación de Estudiantes
//    - Descripción: Escribe un programa que use una declaración `switch` para asignar una calificación (A, B, C, D, F) basada en una puntuación ingresada por el usuario.

const promptSwitch2 = require("prompt-sync")({ sigint: true });

const puntuacion = parseInt(
  promptSwitch2("Ingresa la puntuación del estudiante: "),
  10
);

let calificacion;
switch (true) {
  case puntuacion >= 9:
    calificacion = "A";
    break;
  case puntuacion >= 8:
    calificacion = "B";
    break;
  case puntuacion >= 7:
    calificacion = "C";
    break;
  case puntuacion >= 6:
    calificacion = "D";
    break;
  default:
    calificacion = "F";
}

console.log(`La calificación es: ${calificacion}`);

// 3. Ejercicio 3: Calculadora Básica
//    - Descripción: Escribe un programa que lea dos números y una operación (`+`, `-`, `*`, `/`) del usuario y use una declaración `switch` para realizar la operación y mostrar el resultado.
const promptSwitch3 = require("prompt-sync")({ sigint: true });

const numero1 = parseFloat(promptSwitch3("Ingresa el primer número: "));
const numero2 = parseFloat(promptSwitch3("Ingresa el segundo número: "));
const operador = promptSwitch3("Ingresa el operador (+, -, *, /): ");

let result;

switch (operador) {
  case "+":
    result = numero1 + numero2;
    break;
  case "-":
    result = numero1 - numero2;
    break;
  case "*":
    result = numero1 * numero2;
    break;
  case "/":
    result = numero2 !== 0 ? numero1 / numero2 : "Error: División por cero";
    break;
  default:
    result = "Operador no válido. Usa +, -, * o /.";
}

console.log(`El resultado es: ${result}`);
