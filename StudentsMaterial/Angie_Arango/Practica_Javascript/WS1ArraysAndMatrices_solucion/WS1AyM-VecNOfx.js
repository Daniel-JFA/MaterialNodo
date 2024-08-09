// Ejercicios de Vectores sin funciones

// Este es el vector a usar
// let numbers = [1, 2, 3, 4, 5];

// 1.   Sumar Elementos de un Vector
//    - Descripción: Suma todos los elementos de un vector y muestra el resultado.

let numeros = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numeros.length; i++) {
  sum += numeros[i];
}
console.log("Suma de los elementos:", sum);

// 2.   Encontrar el Máximo de un Vector
//    - Descripción: Encuentra y muestra el valor máximo en un vector.

let num = [1, 2, 3, 4, 5];
let max = num[0];

for (let i = 1; i < num.length; i++) {
  if (num[i] > max) {
    max = num[i];
  }
}
console.log("Valor máximo en el vector:", max);

// 3.   Invertir un Vector
//    - Descripción: Invierte el orden de los elementos de un vector y muestra el resultado.

let numbers = [1, 2, 3, 4, 5];
let inicio = 0;
let fin = numbers.length - 1;

while (inicio < fin) {
  // Intercambiar los elementos
  let temp = numbers[inicio];
  numbers[inicio] = numbers[fin];
  numbers[fin] = temp;

  inicio++;
  fin--;
}

console.log("Vector invertido:", numbers);
