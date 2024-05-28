// Class 1: 
// Introducción a Estructuras de Datos Estáticas: Arreglos y Matrices
// Objetivo de la Clase
// Entender los conceptos fundamentales de las estructuras de datos estáticas, específicamente arreglos y matrices, y cómo se utilizan para organizar y manipular datos en la programación. Aprenderemos a declarar, inicializar y manipular estos tipos de estructuras en JavaScript.

// Definición de Estructura de Datos
// Una estructura de datos es una colección organizada de valores y las operaciones que se pueden realizar sobre ellos. Estas estructuras determinan cómo se almacenan, acceden y modifican los datos.

// Tipos de estructuras de datos:

// Contiguas: Datos almacenados en bloques de memoria contiguos (e.g., arrays, matrices).
// Enlazadas: Datos almacenados en bloques de memoria no contiguos, unidos por punteros (e.g., listas enlazadas).
// Contenedores: Estructuras que permiten almacenar y recuperar datos en un orden específico (e.g., pilas, colas).
// Arreglos (Arrays)
// Un array es una estructura de datos de tamaño fijo que almacena elementos de forma secuencial. Los arrays permiten acceder a sus elementos mediante índices numéricos.

// Usos de los Arreglos
// Los arreglos se utilizan en programación para una variedad de propósitos, incluyendo:

// Almacenamiento de Colecciones de Datos: Cuando necesitamos manejar una lista de elementos, como una lista de nombres, números o cualquier tipo de datos, los arrays son muy útiles para agruparlos de manera ordenada.
// Acceso Rápido a Datos: Los arreglos permiten el acceso directo a sus elementos usando índices, lo cual es muy eficiente en términos de tiempo.
// Implementación de Otras Estructuras de Datos: Muchas estructuras de datos más complejas, como pilas, colas, listas, y matrices, pueden ser implementadas utilizando arrays como base.
// Procesamiento de Datos en Bucles: Los arrays son ideales para ser recorridos y procesados usando bucles, lo que facilita la manipulación de grandes cantidades de datos de manera eficiente.
// Facilitar Algoritmos: Muchos algoritmos, como los de búsqueda y ordenamiento, son más fáciles de implementar y optimizar utilizando arrays.
// Declaración y Inicialización
// En JavaScript, los arrays se pueden declarar e inicializar de las siguientes maneras:

// 
let arr = new Array();
let arr = [];
/* También podemos inicializar un array con elementos: */


let fruits = ["Apple", "Orange", "Plum"];
/* Acceso y Modificación de Elementos
Podemos acceder y modificar los elementos de un array usando índices: */


let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[0]); // Apple
fruits[2] = 'Pear'; // Reemplaza 'Plum' con 'Pear'
fruits[3] = 'Lemon'; // Agrega 'Lemon' al array
/* Longitud del Array
La propiedad length nos indica el número de elementos en el array: */


let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits.length); // 3
/* Métodos Comunes de Arrays
push(): Agrega uno o más elementos al final del array.
pop(): Elimina el último elemento del array.
shift(): Elimina el primer elemento del array.
unshift(): Agrega uno o más elementos al inicio del array. */

let fruits = ["Apple", "Orange"];

fruits.push("Pear"); // ["Apple", "Orange", "Pear"]
console.log(fruits.pop()); // "Pear"
console.log(fruits); // ["Apple", "Orange"]

fruits.unshift("Lemon"); // ["Lemon", "Apple", "Orange"]
console.log(fruits.shift()); // "Lemon"
console.log(fruits); // ["Apple", "Orange"]
/* Ejemplo: Verificar Permutación de Palabras
Para verificar si dos palabras son permutaciones una de la otra, podemos usar arrays y diccionarios para contar las letras.

Verificar longitud:
Si las palabras tienen diferentes longitudes, no pueden ser permutaciones.
Contar letras:
Usar un array para almacenar la cuenta de cada letra. */

function arePermutations(word1, word2) {
    if (word1.length !== word2.length) return false;
    
    let charCount = new Array(26).fill(0);
    
    for (let char of word1) {
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    for (let char of word2) {
        if (--charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)] < 0) {
            return false;
        }
    }
    
    return true;
}

console.log(arePermutations("casa", "saca")); // true
console.log(arePermutations("casa", "casas")); // false
// Matrices (Arrays Multidimensionales)
/* Una matriz es un array de arrays, permitiendo representaciones de datos en múltiples dimensiones. */
/* 
Usos de las Matrices
Las matrices se utilizan para:

Representar Datos en Tablas: Datos tabulares, como una hoja de cálculo, se representan fácilmente con matrices.
Manipulación de Imágenes: En procesamiento de imágenes, las matrices pueden representar los píxeles de una imagen.
Simulaciones y Juegos: Para representar tableros de juego o estados en simulaciones, las matrices son muy útiles.
Algoritmos Matemáticos: En álgebra lineal, las matrices son fundamentales para representar y manipular vectores y transformaciones.
Declaración e Inicialización
Podemos declarar e inicializar matrices de la siguiente manera: */


let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][1]); // 5
// Ejemplo: Matriz Dentada (Jagged Array)
// Las matrices dentadas no tienen un número fijo de columnas:


let jaggedArray = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

console.log(jaggedArray[2][3]); // 9