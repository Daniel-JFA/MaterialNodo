// Ejercicios de Programación.

// Ejercicios de Vectores sin funciones

// Este es el vector a usar
// let numbers = [1, 2, 3, 4, 5];

// 1.   Sumar Elementos de un Vector
//    - Descripción: Suma todos los elementos de un vector y muestra el resultado.
// 2.   Encontrar el Máximo de un Vector
//    - Descripción: Encuentra y muestra el valor máximo en un vector.
// 3.   Invertir un Vector
//    - Descripción: Invierte el orden de los elementos de un vector y muestra el resultado.

// Solucion.....

// 1.   Sumar Elementos de un Vector

let numbers = [1, 2, 3, 4, 5, 6];
let suma = 0;
for (i = 0; i < numbers.length; i++) {
    suma += numbers[i];
}
console.log("La suma es: " + suma);

// 2.   Encontrar el Máximo de un Vector

let max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log("El máximo es: " + max);

// 3.   Invertir un Vector

let arrReverse = numbers.reverse();
console.log(arrReverse);

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

// 1. Sumar Todos los Elementos de una Matriz

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
let suma2 = 0;
for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix.length; j++) {
        suma2 += matrix[i][j]
    }
}
console.log("La suma es: " + suma2);

// 2. Encontrar el Máximo de una Matriz

let max2 = 0;
for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix.length; j++) {
        if (matrix[i][j] > max2) {
            max2 = matrix[i][j];
        }
    }
}
console.log("El máximo es: " + max2);

// 3. Mostrar los Elementos de la Diagonal Principal

for (i = 0, j = 0; i < matrix.length; i++, j++) {
    console.log("Elemento de la diagonal principal: " + matrix[i][j]);
}

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
