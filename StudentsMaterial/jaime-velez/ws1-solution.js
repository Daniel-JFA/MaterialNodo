// Ejercicios de Programación.

// Ejercicios de Vectores sin funciones

// Este es el vector a usar
let numbers = [1, 2, 3, 4, 5];

// 1.   Sumar Elementos de un Vector
//    - Descripción: Suma todos los elementos de un vector y muestra el resultado.
// 2.   Encontrar el Máximo de un Vector
//    - Descripción: Encuentra y muestra el valor máximo en un vector.
// 3.   Invertir un Vector
//    - Descripción: Invierte el orden de los elementos de un vector y muestra el resultado.

// Solucion.....
console.log("------------------------------");
console.log("Vectores, arreglo: ", numbers);
console.log("------------------------------");
function sumArrayElements(numbersArray) {
  let total = 0;
  for (let current of numbersArray) {
    total += current;
  }
  return total;
}

console.log("1. Sumar elementos: ", sumArrayElements(numbers));

function maxArrayElement(numbersArray) {
  let maxValue = numbersArray[0];
  for (let current of numbersArray) {
    maxValue = current > maxValue ? current : maxValue;
  }
  return maxValue;
}

console.log("2. Maximo elemento: ", maxArrayElement(numbers));

function revertArrayElements(numbersArray) {
  let arrayLength = numbersArray.length - 1;
  let revertedArray = [];
  for (let i = arrayLength; i >= 0; i--) {
    revertedArray.push(numbersArray[i]);
  }
  return revertedArray;
}

console.log(
  "3. Invertir elementos del arreglo: ",
  revertArrayElements(numbers)
);
// Ejercicios de Matrices sin funciones

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 1. Sumar Todos los Elementos de una Matriz
//    - Descripción: Suma todos los elementos de una matriz y muestra el resultado.
// 2. Encontrar el Máximo de una Matriz
//    - Descripción: Encuentra y muestra el valor máximo en una matriz.
// 3. Mostrar los Elementos de la Diagonal Principal
//    - Descripción: Muestra los elementos de la diagonal principal de una matriz cuadrada.

// Solucion.....
console.log("------------------------------");
console.log(`Matrices:, elementos:
    [1, 2, 3]
    [4, 5, 6]
    [7, 8, 9]
`);
console.log("------------------------------");
function sumMatrixElements(matrix) {
  let total = 0;
  for (let currentRow of matrix) {
    for (let currentElement of currentRow) {
      total += currentElement;
    }
  }
  return total;
}

console.log("1.Sumar elementos de la matriz: ", sumMatrixElements(matrix));

function maxMatrixElement(matrix) {
  let maxValue = maxArrayElement(matrix[0]);
  for (let currentRow of matrix) {
    let currentRowMaxElement = maxArrayElement(currentRow);
    maxValue =
      currentRowMaxElement > maxValue ? currentRowMaxElement : maxValue;
  }
  return maxValue;
}

console.log("2. Maximo elemento de una matriz: ", maxMatrixElement(matrix));

function matrixDiagonalElements(matrix) {
  //suponiendo que la matrix es cuadrada la cantidad de columnas seria igual al numero de filas
  console.log("3. Elementos de la matrix en diagonal: ");
  let rows = matrix.length;
  let colums = rows;
  for (let i = 0; i < rows; i++) {
    let string = "";
    for (let j = 0; j < colums; j++) {
      if (i === j) string += matrix[i][j];
      else string += "*";
    }
    console.log(string);
  }
}
console.log(matrixDiagonalElements(matrix));

// Ejercicios de Vectores con Funciones
// let numbers = [1, 2, 3, 4, 5];
// 1. Ejercicio 1: Sumar Elementos de un Vector
//    - Descripción: Escribe una función que sume todos los elementos de un vector y devuelva el resultado.
// 2. Ejercicio 2: Encontrar el Máximo de un Vector
//    - Descripción: Escribe una función que encuentre el valor máximo en un vector.
// 3. Ejercicio 3: Invertir un Vector
//    - Descripción: Escribe una función que invierta el orden de los elementos de un vector y devuelva el vector invertido.

// Solucion.....

console.log("------------------------------");
console.log("Vectores con funciones, arreglo: ", numbers);
console.log("------------------------------");

function sumArrayElementsWithReduce(numbers) {
  let sum = numbers.reduce((current, total) => current + total);
  return sum;
}

console.log(
  "1. Sumar elementos con reduce(): ",
  sumArrayElementsWithReduce(numbers)
);

function maxArrayElementWithMax(numbers) {
  let maxValue = Math.max(...numbers);
  return maxValue;
}

console.log(
  "2. Maximo elemento de un arreglo usando Math.max(): ",
  maxArrayElementWithMax(numbers)
);

function revertArrayElementsWithReverse(numbers) {
  let revertedArray = numbers.reverse();
  return revertedArray;
}

console.log(
  "3. Invertir vector usando el metodo reverse()",
  revertArrayElementsWithReverse(numbers)
);

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
console.log("------------------------------");
console.log(`Matrices con funciones:
    [1, 2, 3]
    [4, 5, 6]
    [7, 8, 9]
`);
console.log("------------------------------");

function sumMatrixElementsWithFunctions(matrix) {
  let fromMatrixToArray = matrix.flat();
  let total = fromMatrixToArray.reduce((current, total) => current + total);
  return total;
}

console.log(
  "1. Sumar elementos de una matrix con flat y reduce: ",
  sumMatrixElementsWithFunctions(matrix)
);

function findMaxElementFromMatrix(matrix) {
  let fromMatrixToArray = matrix.flat();
  let maxElement = Math.max(...fromMatrixToArray);
  return maxElement;
}

console.log(
  "2. Encontrar el maximo elemento de una matriz usando flat: ",
  findMaxElementFromMatrix(matrix)
);

function diagonalElementsFromMatrix(matrix) {
  console.log("3. Elementos en diagonal: ");
  matrix.forEach((array, i) => {
    let string = "";
    array.forEach((element, j) => {
      i === j ? (string += element) : (string += "*");
    });
    console.log(string);
  });
}

console.log(diagonalElementsFromMatrix(matrix));

// Ejercicios de Uso de Ciclo `if`

// 1. Ejercicio 1: Determinar si un Número es Positivo, Negativo o Cero
//    - Descripción: Escribe un código que tome un número y determine si es positivo, negativo o cero.
//    - Código:
let number = -30; // Puedes cambiar este valor para probar otros números

//     Solucion....
console.log("------------------------------");
console.log("If ");
console.log("------------------------------");

function isNumberPositiveOrNegative(number) {
  if (number) {
    return number > 0 ? "positivo" : "negativo";
  }
  return 0;
}

console.log(`
    1.verificar si un numero es positivo, negativo o cero
        -el numero ${number} es:  ${isNumberPositiveOrNegative(number)}`);

// 2. Ejercicio 2: Verificar la Edad para Votar
//    - Descripción: Escribe un código que tome la edad de una persona y determine si es elegible para votar (18 años o más).
//    - Código:
let edad = 17; // Puedes cambiar este valor para probar otras edades

//     Solucion....

function canVote(age) {
  if (age >= 18) return "puede votar";
  else return "no puede votar";
}

console.log(`
    2. verificar si una persona puede votar 
        -si tiene una edad de ${edad} anios, ${canVote(edad)}`);

// Ejercicios de Uso de Ciclo `for`

// 1. Ejercicio 1: Imprimir Números del 1 al 10
//    - Descripción: Escribe un código que use un ciclo `for` para imprimir los números del 1 al 10.
// 2. Ejercicio 2: Calcular la Suma de los Primeros N Números
//    - Descripción: Escribe un código que use un ciclo `for` para calcular la suma de los primeros `N` números (por ejemplo, del 1 al 100).

// Solucion....
console.log("------------------------------");
console.log("For loop ");
console.log("------------------------------");
function printNumberFrom1To10(){
    console.log("1. numeros del 1 al 10:");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
console.log(printNumberFrom1To10());

let limit = 9;

function sumElementsFromOneToN(limit) {
    let total = 0;
    for(let i = 1; i <= limit; i++) {
        total += i;
    }

    return total;
}

console.log(`2. Calcular la suma de los N(${limit}) numeros: ", ${sumElementsFromOneToN(limit)}`);

