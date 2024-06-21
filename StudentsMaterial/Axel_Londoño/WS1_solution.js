/*Ejercicios de Programación.

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
*/
let numbers = [1, 2, 3, 4, 5];

//1

let suma = 0;

for (let rsuma of numbers) {
	suma += rsuma;
}

console.log(suma);

//2




/*
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
*/


/*
Ejercicios de Vectores con Funciones
let numbers = [1, 2, 3, 4, 5];
1. Ejercicio 1: Sumar Elementos de un Vector
   - Descripción: Escribe una función que sume todos los elementos de un vector y devuelva el resultado.
2. Ejercicio 2: Encontrar el Máximo de un Vector
   - Descripción: Escribe una función que encuentre el valor máximo en un vector.
3. Ejercicio 3: Invertir un Vector
   - Descripción: Escribe una función que invierta el orden de los elementos de un vector y devuelva el vector invertido.

Solucion.....
*/




/*
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
*/


/*
Ejercicios de Uso de condicional `if`

1. Ejercicio 1: Determinar si un Número es Positivo, Negativo o Cero
   - Descripción: Escribe un código que tome un número y determine si es positivo, negativo o cero.
   - Código:
     let number = 5; // Puedes cambiar este valor para probar otros números

    Solucion....

    let number = 2;

if(number > 0 ){
   console.log(`El numero ${number} es positivo`);
}else if( number < 0 ){
   console.log("El numero "+number+" es negativo");
}else {
   console.log("El numero "+number+" es igual a 0");
}
*/


/*
2. Ejercicio 2: Verificar la Edad para Votar
   - Descripción: Escribe un código que tome la edad de una persona y determine si es elegible para votar (18 años o más).
   - Código:
     let edad = 17; // Puedes cambiar este valor para probar otras edades

    Solucion....


   let edad = 17

   if (edad<18) {
      console.log("Eres menor de edad, no tienes edad para votar.");
   }else if(edad >=18){
      console.log("Eres mayor de edad, tienes edad para votar.");
   }
*/

/*
Ejercicios de Uso de Ciclo `for`

1. Ejercicio 1: Imprimir Números del 1 al 10
   - Descripción: Escribe un código que use un ciclo `for` para imprimir los números del 1 al 10.
2. Ejercicio 2: Calcular la Suma de los Primeros N Números
   - Descripción: Escribe un código que use un ciclo `for` para calcular la suma de los primeros `N` números (por ejemplo, del 1 al 100).
     
Solucion....


//EJERCICIO 1

//for(numero = 1; numero <= 10; numero++){
//console.log("el numero es "+numero);
//}

//EJERCICIO 2
//let suma=0

//for(Nnumeros = 1; Nnumeros <= 100; Nnumeros++){
 //  suma= (suma + Nnumeros);
 //  }

 //  console.log("La suma de los numeros es "+suma);


// 1. Ejercicio 1: Contar hasta que se Ingrese un Número Mayor a 10
//    - Descripción: Escribe un programa que continúe pidiendo al usuario que ingrese un número hasta que el número ingresado sea mayor a 10.

// numero = 10;

// do{
//    console.log("el numero es "+numero);
//    numero ++;
// }while(numero < 10);

// palabra = "ENTRADA";
// number = 0;

// while(palabra == "ENTRADA"){
//    console.log("el numero es "+number);
//    console.log(palabra);
//    if(number == 10){
//       palabra = "SALIDA";
//    }
//    number ++;
// }
// console.log(palabra);

// // while(numero < 10){
// //    console.log("el numero es "+numero);
// //    numero ++;
// // }

// console.log("Ya se salio del ciclo "+numero)

*/


//const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

// console.log(clothing.length);
//for(numero = 1; numero < clothing.length; numero++){
  // console.log("el numero es "+clothing[numero]);
//}
