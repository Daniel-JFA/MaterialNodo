// A continuación, se presenta una lista de las funciones más comunes y útiles para recorrer arreglos:
//  Utilice cada uno de ellos con un ejemplo.

let numeros = [1, 2, 3, 4, 5]; // Definimos una variable global llamada "numeros" que contiene un array de números

//  1. `forEach()`
// Recorre cada elemento del array y ejecuta una función para cada uno de ellos.

numeros.forEach(function (numero) {
  console.log(numero);
});

//  2. `map()`
// Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.

let squares = numeros.map(function (elemento) {
  return elemento * elemento;
});
console.log(squares);

//  3. `filter()`
// Crea un nuevo array con todos los elementos que pasen una prueba (implementada por una función).

let numerosPares = numeros.filter(function (numero) {
  return numero % 2 === 0;
});

console.log(numerosPares);

//  4. `reduce()`
// Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor.

let suma = numeros.reduce(function (acumulador, elemento) {
  return acumulador + elemento;
}, 0);
console.log(suma);

//  5. `reduceRight()`
// Aplica una función a un acumulador y a cada elemento del array (de derecha a izquierda) para reducirlo a un solo valor.

let sumaDerecha = numeros.reduceRight(function (acumulador, elemento) {
  return acumulador + elemento;
}, 0);
console.log(sumaDerecha);

//  6. `some()`
// Prueba si al menos un elemento en el array pasa la prueba implementada por la función proporcionada.

let hayMayor = numeros.some(function (elemento) {
  return elemento > 3;
});

console.log(hayMayor); //true

//  7. `every()`
// Prueba si todos los elementos en el array pasan la prueba implementada por la función proporcionada.

let numMenores = numeros.every(function (elemento) {
  return elemento < 5;
});

console.log(numMenores); //false

//  8. `find()`
// Devuelve el primer elemento del array que satisface la prueba implementada por la función proporcionada.

let mayor = numeros.find(function (elemento) {
  return elemento > 3;
});

console.log(mayor); //4

//  9. `findIndex()`
// Devuelve el índice del primer elemento del array que satisface la prueba implementada por la función proporcionada. Si no se encuentra, devuelve -1.

let indiceMayor = numeros.findIndex(function (elemento) {
  return elemento < 3;
});

console.log(indiceMayor); //Indice 0

//  10. `keys()`
// Devuelve un nuevo objeto Array Iterator que contiene las claves para cada índice en el array.

let claves = numeros.keys();
for (let clave of claves) {
  console.log(clave);
}

//  11. `values()`
// Devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice en el array.

let valores = numeros.values();
for (let valor of valores) {
  console.log(valor);
} //indices de los elementos.

//  12. `entries()`
// Devuelve un nuevo objeto Array Iterator que contiene pares clave/valor para cada índice en el array.

let entradas = numeros.entries();
for (let [indice, valor] of entradas) {
  console.log(indice, valor);
}

//  13. `for...of`
// Un bucle que permite recorrer los elementos de un array (y otros objetos iterables).

for (let numero of numeros) {
  console.log(numero);
}

//  14. `for...in`
// Un bucle que permite recorrer las claves (índices) de un array (aunque es más adecuado para objetos).

for (let indice in numeros) {
  console.log(indice, numeros[indice]);
}

//  15. `flat()`
// Devuelve un nuevo array con todos los elementos de sub-array concatenados en él de forma recursiva hasta la profundidad especificada.

let numerosAnidados = [1, [2, [3, [4]]]];
let plano = numerosAnidados.flat(2); // Profundidad de 2
console.log(plano);
