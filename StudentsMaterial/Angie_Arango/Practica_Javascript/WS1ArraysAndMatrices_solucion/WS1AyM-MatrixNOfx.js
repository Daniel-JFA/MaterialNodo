// Ejercicios de Matrices sin funciones

// let matrix = [
//          [1, 2, 3],
//          [4, 5, 6],
//          [7, 8, 9]
//      ];

// 1. Sumar Todos los Elementos de una Matriz
//    - Descripción: Suma todos los elementos de una matriz y muestra el resultado.

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sum = 0;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) sum += matrix[i][j];
}
console.log("Suma de todos los elementos:", sum);

// 2. Encontrar el Máximo de una Matriz
//    - Descripción: Encuentra y muestra el valor máximo en una matriz.

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let max = matriz[0][0];

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] > max) {
      max = matriz[i][j];
    }
  }
}
console.log("Valor máximo en la matriz:", max);

// 3. Mostrar los Elementos de la Diagonal Principal
//    - Descripción: Muestra los elementos de la diagonal principal de una matriz cuadrada.

let matr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let diagonal = [];

for (let i = 0; i < matr.length; i++) {
  diagonal.push(matr[i][i]);
}

console.log("Elementos de la diagonal principal:", diagonal);
