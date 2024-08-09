// Ejercicios de Matrices con Funciones
//  let matrix = [
//          [1, 2, 3],
//          [4, 5, 6],
//          [7, 8, 9]
//      ];
// 1.   Sumar Todos los Elementos de una Matriz
//    - Descripción: Escribe una función que sume todos los elementos de una matriz y devuelva el resultado.

function sumElemenMatriz(matriz1) {
  let suma = 0;
  for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz1[i].length; j++) {
      suma += matriz1[i][j];
    }
  }
  return suma;
}

let matriz1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Suma de todos los elementos:", sumElemenMatriz(matriz1));

// 2.   Encontrar el Máximo de una Matriz
//    - Descripción: Escribe una función que encuentre el valor máximo en una matriz.

function encontrarMaximoMatriz(matrix) {
  let max = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j];
      }
    }
  }
  return max;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Valor máximo en la matriz:", encontrarMaximoMatriz(matrix));

// 3.   Mostrar los Elementos de la Diagonal Principal
//    - Descripción: Escribe una función que muestre los elementos de la diagonal principal de una matriz cuadrada.

function mostrarDiagonalPrincipal(matriz3) {
  let diagonal = [];
  for (let i = 0; i < matriz3.length; i++) {
    diagonal.push(matriz3[i][i]);
  }
  return diagonal;
}

let matriz3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(
  "Elementos de la diagonal principal:",
  mostrarDiagonalPrincipal(matriz3)
);
