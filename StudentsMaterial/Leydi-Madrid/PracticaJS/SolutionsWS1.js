<<<<<<< HEAD
// Ejercicios de Programación.

// Ejercicios de Vectores sin funciones

// Este es el vector a usar
// let numbers = [1, 2, 3, 4, 5];

// 1.   Sumar Elementos de un Vector
//    - Descripción: Suma todos los elementos de un vector y muestra el resultado.

let myArray = [1, 2, 3, 4, 5, 10, 7];
let result;
for (let i = 0; i < myArray.length; i++) {
  if (i === 0) {
    result = myArray[i];
  } else {
    result += myArray[i];
  }
}
console.log(`➕ La suma es igual a ${result}`);

//Practica con ForEach

let myArray2 = [1, 2, 3, 4, 5, 10, 10];
let result2 = 0;
myArray2.forEach((element) => {
  result2 += element;
});

console.log(`😊 La suma es igual a ${result2}`);

// 2.   Encontrar el Máximo de un Vector
//    - Descripción: Encuentra y muestra el valor máximo en un vector.

let vector = [4, 6, 9, 10, 15];
let MaxVector = 0;
for (let i of vector) {
  if (MaxVector < i) {
    MaxVector = i;
  }
}
console.log(`🌟 El número máximo es ${MaxVector}`);

//Practicando con Math
//... Traen copia de los elementos

let array = [4, 5, 1, 9, 28, 100, 3];
console.log(`😁 El valor máximo es ${Math.max(...array)}`);

// 3.   Invertir un Vector
//    - Descripción: Invierte el orden de los elementos de un vector y muestra el resultado.

// Solucion.....

// Ejercicios de Matrices sin funciones

// let matrix = [
//          [1, 2, 3],
//          [4, 5, 6],
//          [7, 8, 9]
//      ];

// 1. Sumar Todos los Elementos de una Matriz
//    - Descripción: Suma todos los elementos de una matriz y muestra el resultado.
// 2. Encontrar el Máximo de una Matriz
//    - Descripción: Encuentra y muestra el valor máximo en una matriz.
// 3. Mostrar los Elementos de la Diagonal Principal
//    - Descripción: Muestra los elementos de la diagonal principal de una matriz cuadrada.

// Solucion.....

// Ejercicios de Vectores con Funciones
// let numbers = [1, 2, 3, 4, 5];
// 1. Ejercicio 1: Sumar Elementos de un Vector
//    - Descripción: Escribe una función que sume todos los elementos de un vector y devuelva el resultado.
// 2. Ejercicio 2: Encontrar el Máximo de un Vector
//    - Descripción: Escribe una función que encuentre el valor máximo en un vector.
// 3. Ejercicio 3: Invertir un Vector
//    - Descripción: Escribe una función que invierta el orden de los elementos de un vector y devuelva el vector invertido.

// Solucion.....

// Ejercicios de Matrices con Funciones
//  let matrix = [
//          [1, 2, 3],
//          [4, 5, 6],
//          [7, 8, 9]
//      ];
// 1.   Sumar Todos los Elementos de una Matriz
//    - Descripción: Escribe una función que sume todos los elementos de una matriz y devuelva el resultado.
// 2.   Encontrar el Máximo de una Matriz
//    - Descripción: Escribe una función que encuentre el valor máximo en una matriz.
// 3.   Mostrar los Elementos de la Diagonal Principal
//    - Descripción: Escribe una función que muestre los elementos de la diagonal principal de una matriz cuadrada.

// Solucion.....

// Ejercicios de Uso de Ciclo `if`

// 1. Ejercicio 1: Determinar si un Número es Positivo, Negativo o Cero
//    - Descripción: Escribe un código que tome un número y determine si es positivo, negativo o cero.
//    - Código:
//      let number = 5; // Puedes cambiar este valor para probar otros números

//     Solucion....

// 2. Ejercicio 2: Verificar la Edad para Votar
//    - Descripción: Escribe un código que tome la edad de una persona y determine si es elegible para votar (18 años o más).
//    - Código:
//      let edad = 17; // Puedes cambiar este valor para probar otras edades

//     Solucion....

// Ejercicios de Uso de Ciclo `for`

// 1. Ejercicio 1: Imprimir Números del 1 al 10
//    - Descripción: Escribe un código que use un ciclo `for` para imprimir los números del 1 al 10.
// 2. Ejercicio 2: Calcular la Suma de los Primeros N Números
//    - Descripción: Escribe un código que use un ciclo `for` para calcular la suma de los primeros `N` números (por ejemplo, del 1 al 100).

// Solucion....
=======
// Ejercicios de Programación.

// Ejercicios de Vectores sin funciones

// Este es el vector a usar
// let numbers = [1, 2, 3, 4, 5];

// 1.   Sumar Elementos de un Vector
//    - Descripción: Suma todos los elementos de un vector y muestra el resultado.

let myArray = [1, 2, 3, 4, 5, 10, 7];
let result;
for (let i = 0; i < myArray.length; i++) {
  if (i === 0) {
    result = myArray[i];
  } else {
    result += myArray[i];
  }
}
console.log(`➕ La suma es igual a ${result}`);

//Practica con ForEach

let myArray2 = [1, 2, 3, 4, 5, 10, 10];
let result2 = 0;
myArray2.forEach((element) => {
  result2 += element;
});

console.log(`😊 La suma es igual a ${result2}`);

// 2.   Encontrar el Máximo de un Vector
//    - Descripción: Encuentra y muestra el valor máximo en un vector.

let vector = [4, 6, 9, 10, 15];
let MaxVector = 0;
for (let i of vector) {
  if (MaxVector < i) {
    MaxVector = i;
  }
}
console.log(`🌟 El número máximo es ${MaxVector}`);

//Practicando con Math
//... Traen copia de los elementos

let array = [4, 5, 1, 9, 28, 100, 3];
console.log(`😁 El valor máximo es ${Math.max(...array)}`);

// 3.   Invertir un Vector
//    - Descripción: Invierte el orden de los elementos de un vector y muestra el resultado.

// Solucion.....

// Ejercicios de Matrices sin funciones

// let matrix = [
//          [1, 2, 3],
//          [4, 5, 6],
//          [7, 8, 9]
//      ];

// 1. Sumar Todos los Elementos de una Matriz
//    - Descripción: Suma todos los elementos de una matriz y muestra el resultado.
// 2. Encontrar el Máximo de una Matriz
//    - Descripción: Encuentra y muestra el valor máximo en una matriz.
// 3. Mostrar los Elementos de la Diagonal Principal
//    - Descripción: Muestra los elementos de la diagonal principal de una matriz cuadrada.

// Solucion.....

// Ejercicios de Vectores con Funciones
// let numbers = [1, 2, 3, 4, 5];
// 1. Ejercicio 1: Sumar Elementos de un Vector
//    - Descripción: Escribe una función que sume todos los elementos de un vector y devuelva el resultado.
// 2. Ejercicio 2: Encontrar el Máximo de un Vector
//    - Descripción: Escribe una función que encuentre el valor máximo en un vector.
// 3. Ejercicio 3: Invertir un Vector
//    - Descripción: Escribe una función que invierta el orden de los elementos de un vector y devuelva el vector invertido.

// Solucion.....

// Ejercicios de Matrices con Funciones
//  let matrix = [
//          [1, 2, 3],
//          [4, 5, 6],
//          [7, 8, 9]
//      ];
// 1.   Sumar Todos los Elementos de una Matriz
//    - Descripción: Escribe una función que sume todos los elementos de una matriz y devuelva el resultado.
// 2.   Encontrar el Máximo de una Matriz
//    - Descripción: Escribe una función que encuentre el valor máximo en una matriz.
// 3.   Mostrar los Elementos de la Diagonal Principal
//    - Descripción: Escribe una función que muestre los elementos de la diagonal principal de una matriz cuadrada.

// Solucion.....

// Ejercicios de Uso de Ciclo `if`

// 1. Ejercicio 1: Determinar si un Número es Positivo, Negativo o Cero
//    - Descripción: Escribe un código que tome un número y determine si es positivo, negativo o cero.
//    - Código:
//      let number = 5; // Puedes cambiar este valor para probar otros números

//     Solucion....

// 2. Ejercicio 2: Verificar la Edad para Votar
//    - Descripción: Escribe un código que tome la edad de una persona y determine si es elegible para votar (18 años o más).
//    - Código:
//      let edad = 17; // Puedes cambiar este valor para probar otras edades

//     Solucion....

// Ejercicios de Uso de Ciclo `for`

// 1. Ejercicio 1: Imprimir Números del 1 al 10
//    - Descripción: Escribe un código que use un ciclo `for` para imprimir los números del 1 al 10.
// 2. Ejercicio 2: Calcular la Suma de los Primeros N Números
//    - Descripción: Escribe un código que use un ciclo `for` para calcular la suma de los primeros `N` números (por ejemplo, del 1 al 100).

// Solucion....
>>>>>>> c8fb3763e7ab98bddfa39202d549a8b78f256653
