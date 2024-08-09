// Ejercicios de Vectores con Funciones
// let numbers = [1, 2, 3, 4, 5];
// 1. Ejercicio 1: Sumar Elementos de un Vector
//    - Descripción: Escribe una función que sume todos los elementos de un vector y devuelva el resultado.

function sumarElementos(vector) {
  let suma = 0;
  for (let i = 0; i < vector.length; i++) {
    suma += vector[i];
  }
  return suma;
}

let num = [1, 2, 3, 4, 5];
console.log("Suma de los elementos:", sumarElementos(num));

// 2. Ejercicio 2: Encontrar el Máximo de un Vector
//    - Descripción: Escribe una función que encuentre el valor máximo en un vector.

function encontrarMaximo(vector) {
  let max = vector[0];
  for (let i = 1; i < vector.length; i++) {
    if (vector[i] > max) {
      max = vector[i];
    }
  }
  return max;
}

let numeros = [1, 2, 3, 4, 5];
console.log("Valor máximo en el vector:", encontrarMaximo(numeros));

// 3. Ejercicio 3: Invertir un Vector
//    - Descripción: Escribe una función que invierta el orden de los elementos de un vector y devuelva el vector invertido.

function invertirVector(vector) {
  let invertido = [];
  for (let i = vector.length - 1; i >= 0; i--) {
    invertido.push(vector[i]);
  }
  return invertido;
}

let numbers = [1, 2, 3, 4, 5];
console.log("Vector invertido:", invertirVector(numbers));
