/* Ejercicios de Programación.

Ejercicios de Vectores sin funciones

Este es el vector a usar
let numbers = [1, 2, 3, 4, 5];

1.   Sumar Elementos de un Vector
   - Descripción: Suma todos los elementos de un vector y muestra el resultado.
2.   Encontrar el Máximo de un Vector
   - Descripción: Encuentra y muestra el valor máximo en un vector.
3.   Invertir un Vector
   - Descripción: Invierte el orden de los elementos de un vector y muestra el resultado.

Solucion.....



Ejercicios de Matrices sin funciones

let matrix = [
         [1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]
     ];

1. Sumar Todos los Elementos de una Matriz
   - Descripción: Suma todos los elementos de una matriz y muestra el resultado.
2. Encontrar el Máximo de una Matriz
   - Descripción: Encuentra y muestra el valor máximo en una matriz.
3. Mostrar los Elementos de la Diagonal Principal
   - Descripción: Muestra los elementos de la diagonal principal de una matriz cuadrada.

Solucion..... 




Ejercicios de Vectores con Funciones
let numbers = [1, 2, 3, 4, 5];
1. Ejercicio 1: Sumar Elementos de un Vector
   - Descripción: Escribe una función que sume todos los elementos de un vector y devuelva el resultado.
2. Ejercicio 2: Encontrar el Máximo de un Vector
   - Descripción: Escribe una función que encuentre el valor máximo en un vector.
3. Ejercicio 3: Invertir un Vector
   - Descripción: Escribe una función que invierta el orden de los elementos de un vector y devuelva el vector invertido.

Solucion.....






Ejercicios de Matrices con Funciones
 let matrix = [
         [1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]
     ];
1.   Sumar Todos los Elementos de una Matriz
   - Descripción: Escribe una función que sume todos los elementos de una matriz y devuelva el resultado.
2.   Encontrar el Máximo de una Matriz
   - Descripción: Escribe una función que encuentre el valor máximo en una matriz.
3.   Mostrar los Elementos de la Diagonal Principal
   - Descripción: Escribe una función que muestre los elementos de la diagonal principal de una matriz cuadrada.

Solucion.....




Ejercicios de Uso de Ciclo `if`

1. Ejercicio 1: Determinar si un Número es Positivo, Negativo o Cero
   - Descripción: Escribe un código que tome un número y determine si es positivo, negativo o cero.
   - Código:
     let number = 5; // Puedes cambiar este valor para probar otros números

    Solucion....

2. Ejercicio 2: Verificar la Edad para Votar
   - Descripción: Escribe un código que tome la edad de una persona y determine si es elegible para votar (18 años o más).
   - Código:
     let edad = 17; // Puedes cambiar este valor para probar otras edades

    Solucion....



Ejercicios de Uso de Ciclo `for`

1. Ejercicio 1: Imprimir Números del 1 al 10
   - Descripción: Escribe un código que use un ciclo `for` para imprimir los números del 1 al 10.
2. Ejercicio 2: Calcular la Suma de los Primeros N Números
   - Descripción: Escribe un código que use un ciclo `for` para calcular la suma de los primeros `N` números (por ejemplo, del 1 al 100).
     
Solucion....
 */
/*
Este es el vector a usar
let numbers = [1, 2, 3, 4, 5];

1.   Sumar Elementos de un Vector
   - Descripción: Suma todos los elementos de un vector y muestra el resultado.*/
   let numbers = [1, 2, 3, 4, 5];
  //Metodo 1
   let j=0;
   for (let i =0;i<5;i++ ){
      j+=numbers[i];
   }
   console.log(j);
   //Metodo 2
   j=0;
 numbers.forEach(element => {
   j+=element;
 });
 j=0;
   console.log(j);
   //Metodo 3
   for (let i of numbers) {
      j+=i;
   }
   console.log(j);
   
   //Metodo 4
   j=0;
   for (let i in numbers) {
      j+=numbers[i];
   }
   console.log(j);

//2.   Encontrar el Máximo de un Vector let numbers = [1, 2, 3, 4, 5];
//- Descripción: Encuentra y muestra el valor máximo en un vector.
let max=-1;
for (let i of numbers) {
   if(max<i){
      max=i;
   }
}
console.log("El numero mayor es "+max);
/* 3.   Invertir un Vector
   - Descripción: Invierte el orden de los elementos de un vector y muestra el resultado.
 */
//usando un metodo
   let vector = [1, 2, 3, 4, 5];

   // Mostramos el vector original
   console.log("Vector original:", vector);
   
   // Invertimos el vector utilizando el método reverse
   vector.reverse();
   
   // Mostramos el vector invertido
   console.log("Vector invertido:", vector);
   
   //con una funcion
   let vector2 = [1, 2, 3, 4, 5];
   function invertirVector(arr) {
      let invertido = [];
      for (let i = arr.length - 1; i >= 0; i--) {
          invertido.push(arr[i]);
      }
      return invertido;
  }
  // Llamamos a la función y almacenamos el resultado
let vectorInvertido = invertirVector(vector2);

// Mostramos el vector invertido
console.log("Vector invertido:", vectorInvertido);

/* Ejercicios de Matrices sin funciones

let matrix = [
         [1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]
     ];

1. Sumar Todos los Elementos de una Matriz
   - Descripción: Suma todos los elementos de una matriz y muestra el resultado.
2. Encontrar el Máximo de una Matriz
   - Descripción: Encuentra y muestra el valor máximo en una matriz.
3. Mostrar los Elementos de la Diagonal Principal
   - Descripción: Muestra los elementos de la diagonal principal de una matriz cuadrada.

Solucion.....  */

console.log("Ejercicios de Matrices sin funciones");
let matrix = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
];
//Sum almacenará la suma
sum=0;
// para visualizar la matriz 
for (let i of matrix) {
   console.log(i);
}
for (let i of matrix) {
  for(j of i){
      sum+=j;
  }
}

console.log("La suma de los elementos de la matriz es:");
console.log(sum);
/* 2. Encontrar el Máximo de una Matriz
   - Descripción: Encuentra y muestra el valor máximo en una matriz. */
  max=-1;
   for (let i of matrix) {
      for(j of i){
         if(max<j){
            max=j;
         }
      }
    }
    console.log("El maximo elemento de la matriz es:");
    console.log(max);

    /* 3. Mostrar los Elementos de la Diagonal Principal
   - Descripción: Muestra los elementos de la diagonal principal de una matriz cuadrada.
 */
//asumiendo que la matriz es cuadrada n*n
let n=matrix[0].length;
console.log("los elementos de la diagonal de la matriz son:");
for(let i =0;i<n;i++){
for(let j =0;j<n;j++){
   if(i==j){
      console.log(matrix[i][j]);
   }
}
}

//Ejercicios de Vectores con Funciones
let numbers2 = [1, 2, 3, 4, 5];
/* 1. Ejercicio 1: Sumar Elementos de un Vector
   - Descripción: Escribe una función que sume todos los elementos de un vector y devuelva el resultado.
2. Ejercicio 2: Encontrar el Máximo de un Vector
   - Descripción: Escribe una función que encuentre el valor máximo en un vector.
3. Ejercicio 3: Invertir un Vector
   - Descripción: Escribe una función que invierta el orden de los elementos de un vector y devuelva el vector invertido.

Solucion..... */
// Ejercicio 1: 
function sumarElementos(vector) {
   return vector.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}
console.log("la suma de los elmentos",sumarElementos(numbers2));
//ejercicio 2
function encontrarMaximo(vector) {
   return Math.max(...vector);
}

console.log("El numero maximo es: ",encontrarMaximo(numbers2));
// ejercicio 3
function invertirVector(vector) {
   return vector.slice().reverse();
}
console.log("El vector invertido es: ",invertirVector(numbers2));