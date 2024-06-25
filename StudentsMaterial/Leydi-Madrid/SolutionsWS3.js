// Taller de Programación en JavaScript

// Este taller está diseñado para ayudarte a practicar y reforzar tu comprensión de las estructuras de control en JavaScript.
// Los ejercicios están divididos en diferentes niveles de dificultad y cada conjunto se enfoca en una estructura de control específica:
// `if`, `for`, `while`, y `switch`.
// Este taller te proporcionará una práctica variada y profunda en el uso de estructuras de control en JavaScript.
// Trabaja a través de cada conjunto de ejercicios y asegúrate de entender cómo funcionan y cuándo usar cada estructura. ¡Buena suerte!

// Ejercicios con `if`

// 1. Ejercicio 1: Número Positivo, Negativo o Cero
//    - Descripción: Escribe un programa que lea un número del usuario y determine si es positivo, negativo o cero.

// 2. Ejercicio 2: Edad para Votar
//    - Descripción: Escribe un programa que lea la edad de una persona y determine si es elegible para votar (mayor o igual a 18 años).

// 3. Ejercicio 3: Determinar el Mayor de Tres Números
//    - Descripción: Escribe un programa que lea tres números del usuario y determine cuál es el mayor.

// Ejercicios con `for`

// 1. Ejercicio 1: Imprimir Números del 1 al 10
//    - Descripción: Escribe un programa que use un ciclo `for` para imprimir los números del 1 al 10.

// 2. Ejercicio 2: Calcular la Suma de los Primeros N Números
//    - Descripción: Escribe un programa que use un ciclo `for` para calcular la suma de los primeros `N` números (por ejemplo, del 1 al 100).

// 3. Ejercicio 3: Tabla de Multiplicar
//    - Descripción: Escribe un programa que use un ciclo `for` para imprimir la tabla de multiplicar de un número ingresado por el usuario.

// Ejercicios con `while`

// 1. Ejercicio 1: Contar hasta que se Ingrese un Número Mayor a 10
//    - Descripción: Escribe un programa que continúe pidiendo al usuario que ingrese un número hasta que el número ingresado sea mayor a 10.

// 2. Ejercicio 2: Adivinar un Número
//    - Descripción: Escribe un programa que elija un número aleatorio entre 1 y 100, y luego continúe pidiendo al usuario que adivine el número hasta que lo adivine correctamente.

// 3. Ejercicio 3: Contar Dígitos de un Número
//    - Descripción: Escribe un programa que use un ciclo `while` para contar la cantidad de dígitos de un número ingresado por el usuario.

// Ejercicios con `switch`

// 1. Ejercicio 1: Determinar el Día de la Semana
//    - Descripción: Escribe un programa que lea un número del 1 al 7 y use una declaración `switch` para determinar el día de la semana correspondiente.

let prompt = require("prompt-sync")({ sigint: true });
let inputOpcion = parseInt(prompt("Ingrese un número: "));

switch (inputOpcion) {
  case 1:
    console.log("Hoy es Lunes 😊");
    break;
  case 2:
    console.log("Hoy es Martes 😊");
    break;
  case 3:
    console.log("Hoy es Miércoles 😊");
    break;
  case 4:
    console.log("Hoy es Jueves 😊");
    break;
  case 5:
    console.log("Hoy es Viernes 😊");
    break;
  case 6:
    console.log("Hoy es Sábado 😊");
    break;
  case 7:
    console.log("Hoy es Domingo 😊");
    break;
  default:
    console.log(
      "El número ingresado no corresponde a ningún día de la semana 😒"
    );
    break;
}

// 2. Ejercicio 2: Clasificación de Estudiantes
//    - Descripción: Escribe un programa que use una declaración `switch` para asignar una calificación (A, B, C, D, F) basada en una puntuación ingresada por el usuario.

// 3. Ejercicio 3: Calculadora Básica
//    - Descripción: Escribe un programa que lea dos números y una operación (`+`, `-`, `*`, `/`) del usuario y use una declaración `switch` para realizar la operación y mostrar el resultado.

const user = "leydimadrid";
const fullname = "Leydi Madrid";
const age = 26;
const address = { street: "Calle 58", city: "Medellín", country: "Colombia" };
const hobbies = ["Aprender", "Código", "Ver películas de acción"];
const hobbiesSeparados = hobbies.split(' ')
const Biography = `Hola mi nombre es ${fullname}, tengo ${age} años y vivo en ${address.street}, ${address.city}, ${address.country}, estoy aprendiendo desarrollo web, tengo una cuenta en GitHub mi nombre de usuario es ${user}, miss hobbies favoritos son ${hobbies}`;

console.log(Biography);
