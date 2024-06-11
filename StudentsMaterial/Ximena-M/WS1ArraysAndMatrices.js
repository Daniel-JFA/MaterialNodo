// Ejercicios de Programación.

// Ejercicios de Vectores sin funciones

// Este es el vector a usar
// let numbers = [1, 2, 3, 4, 5];

// 1.   Sumar Elementos de un Vector
// - Descripción: Suma todos los elementos de un vector y muestra el resultado.

let numbers = [1, 2, 3, 4, 5];
let suma = 0;
for (let i = 0; i < numbers.length; i++) {
   suma += numbers [i];
}
console.log("La suma de los numeros del vector es:" + suma)

// 2.   Encontrar el Máximo de un Vector
//  - Descripción: Encuentra y muestra el valor máximo en un vector.

const number = [1, 2, 3, 4, 5];
const max = Math.max(...number);
console.log(max);


// 3.   Invertir un Vector
// - Descripción: Invierte el orden de los elementos de un vector y muestra el resultado.

const numero = [1, 2, 3, 4, 5];
const reversenumber = [...numero].reverse();
console.log(reversenumber);
console.log(numero);

// Ejercicios de Matrices sin funciones

let matrix = [
         [1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]
     ];

// 1. Sumar Todos los Elementos de una Matriz
// - Descripción: Suma todos los elementos de una matriz y muestra el resultado.

let sumaTotal = 0;
for (let i =0; i < matrix.length; i++){
   for (let j = 0; j < matrix[i].length; j++){
      sumaTotal += matrix[i][j];
   }
}
let matrixResultado = [[sumaTotal]];
console.log(matrixResultado);

//2. Encontrar el Máximo de una Matriz
//  - Descripción: Encuentra y muestra el valor máximo en una matriz.

let maximo = matrix[0][0];
for(let i = 0; i < matrix.length; i++){
   for(let j = 0; j < matrix.length; j++){
      if (matrix[i][j] > maximo){
         maximo = matrix[i][j];
      }
   }
}
console.log("El valor maximo en la matriz es:", maximo);


// 3. Mostrar los Elementos de la Diagonal Principal
// - Descripción: Muestra los elementos de la diagonal principal de una matriz cuadrada.

let diagonalPrincipal = [];
for (let i = 0; i < matrix.length; i++) {
   diagonalPrincipal.push(matrix[i][i]);
}
console.log("Elementos de la diagonal pricipal:", diagonalPrincipal)

// Ejercicios de Vectores con Funciones

// 1. Ejercicio 1: Sumar Elementos de un Vector
//   - Descripción: Escribe una función que sume todos los elementos de un vector y devuelva el resultado.

function sumarVectores(vector) {
   let suma = 0;
   for (let i = 0; i < vector.length; i++){
      suma += vector [i];
   }
   return suma;
}
const miVector = [5, 7, 8];
const resultado = sumarVectores(miVector);
console.log("La suma de los elementos del vector es:",resultado);

//2. Ejercicio 2: Encontrar el Máximo de un Vector
//   - Descripción: Escribe una función que encuentre el valor máximo en un vector.

function valorMax(vector) {
if (vector.length === 0){
   return undefined;
}
let maximun = vector [0];
for (let i = 1; i<vector.length; i++) {
   if (vector[i] > maximo) {
      maximun = vector [i];
   }
}
return maximun;
}
const maxVector = [5, 6, 8, 10];
const maximun = valorMax(maxVector);
console.log("El valor maximo del vector es:", maximun);

//3. Ejercicio 3: Invertir un Vector
//   - Descripción: Escribe una función que invierta el orden de los elementos de un vector y devuelva el vector invertido.

function vecInvertido(vector) {
   const vectorInvertido = [];
   for (let i = vector.length - 1; i >= 0; i--) {
      vectorInvertido.push(vector[i]);
   }
return vectorInvertido;
}
const myVector = [2, 4, 6, 8, 10];
const vectorInvertido = vecInvertido (myVector);
console.log("los elementos invertidos son:", vectorInvertido);

// Ejercicios de Matrices con Funciones

 let matriz = [
         [1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]
     ];

// 1.   Sumar Todos los Elementos de una Matriz
// - Descripción: Escribe una función que sume todos los elementos de una matriz y devuelva el resultado.

function sumarmatrix(matriz) {
   let suma = 0;
   for (let i = 0; i < matriz.length; i++) {
      for(let j = 0; j < matriz[i].length; j++) {
         suma += matriz [i][j];
      }
     
   }
   return suma;
}

const resultadoM = sumarmatrix(matriz);
console.log("La suma de los elementos de la matriz es:",resultadoM);

//2.   Encontrar el Máximo de una Matriz
// - Descripción: Escribe una función que encuentre el valor máximo en una matriz.
function maxMatriz(matriz) {
   if (matriz.length === 0 || matriz[0].length === 0){
      return undefined;
   }
   let maximoMatriz = matriz [0][0];
   for (let i = 0; i < matriz.length; i++) {
      for(let j = 0; j < matriz[i].length; j++){
         if (matriz[i][j] > maximoMatriz) {
            maximoMatriz = matriz[i][j];
         }
      }
   }
   return maximoMatriz;
   }
   const maximoMatriz = maxMatriz(matriz);
   console.log("El valor maximo de la matriz es:", maximoMatriz);
   
//3.   Mostrar los Elementos de la Diagonal Principal
//- Descripción: Escribe una función que muestre los elementos de la diagonal principal de una matriz cuadrada.

function diagonalMatriz(matriz) {
if (matriz.length ===0 || matriz.length !==matriz[0].length){
   return "La matriz no es cuadrada"
}
const diagonalPrincipal =[];
for (let i = 0; i < matriz.length; i++) {
   diagonalPrincipal.push(matriz[i][i]);
}
return diagonalPrincipal;
}
const diagonal = diagonalMatriz(matriz);
console.log("Elementos de la diagonal pricipal:", diagonal);