// A continuación, se presenta una lista de las funciones más comunes y útiles para recorrer arreglos:
// Utilice cada uno de ellos con un ejemplo.

// 1. `forEach()`
// Recorre cada elemento del array y ejecuta una función para cada uno de ellos.

function numeros(numeros) {
  numeros.forEach((element) => {
    console.log(`Soy el número: ${element}`);
  });
}

numeros([1, 2, 3, 4]);

console.log("----------------------");

// 2. `map()`
// Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.

function numeroCuadrado(numeros) {
  return numeros.map((num) => num ** 2);
}

console.log(
  `Soy el array de numeros al cuadrado ${numeroCuadrado([4, 5, 6, 7]).join(
    ", "
  )}`
);

console.log("----------------------");

// 3. `filter()`
// Crea un nuevo array con todos los elementos que pasen una prueba (implementada por una función).

function mayorAdiez(array) {
  return array.filter((num) => num >= 10);
}

console.log(
  `Los números en el array mayores a 10 son: ${mayorAdiez([
    1, 3, 4, 10, 20, 11, 34,
  ]).join(" - ")}`
);

console.log("----------------------");

// 4. `reduce()`
// Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor.

let arraySuma = [2, 4, 6, 8];
function sumarArray(array) {
  return array.reduce((a, b) => a + b, 0);
}

console.log(`Soy la suma del array ${sumarArray(arraySuma)}`);

console.log("----------------------");

// 5. `reduceRight()`
// Aplica una función a un acumulador y a cada elemento del array (de derecha a izquierda) para reducirlo a un solo valor.

let matriz = [
  [4, 5],
  [6, 7],
  [8, 9],
];

function multiplicacionMatriz(array) {
  return array.flat().reduceRight((a, b) => a * b);
}

console.log(
  `Soy la multiplicación de la matriz ${multiplicacionMatriz(matriz)}`
);

console.log("----------------------");

// 6. `some()`
// Prueba si al menos un elemento en el array pasa la prueba implementada por la función proporcionada.

function encontrarPalabra(palabras) {
  return palabras.some((palabra) => {
    if (palabra.length == 5) {
      console.log(`Soy la palabra ${palabra}`);
      return true;
    }
  });
}

console.log(encontrarPalabra(["Leydi", "Johana", "Juana"]));
console.log("----------------------");

// 7. `every()`
// Prueba si todos los elementos en el array pasan la prueba implementada por la función proporcionada.

let users = [
  { name: "Leydi", age: 26 },
  { name: "Johana", age: 30 },
  { name: "Juana", age: 25 },
];

let haveAge = users.every((user) => user.hasOwnProperty("age"));
console.log(haveAge);

// 8. `find()`
// Devuelve el primer elemento del array que satisface la prueba implementada por la función proporcionada.

let animales = ["Perro", "Gato", "Lobo", "Tigre"];
animales.find((animal) => {
  if (animal == "Gato") {
    console.log(`Soy el animal ${animal}`);
  } else {
    console.log(`No soy el animal ${animal}`);
  }
});

console.log("----------------------");

// 9. `findIndex()`
// Devuelve el índice del primer elemento del array que satisface la prueba implementada por la función proporcionada. Si no se encuentra, devuelve -1.

let nombres = ["Patricia", "Juan", "Roberto", "Samu"];
let resultado = nombres.findIndex((nombre) => nombre.length == 4);
console.log(resultado);

console.log("----------------------");

// 10. `keys()`
// Devuelve un nuevo objeto Array Iterator que contiene las claves para cada índice en el array.

let users1 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "John", age: 35 },
  { name: "Jane", age: 20 },
];

let nuevoObjetoArrayKeys = users1.keys();
let nuevoObjetoArrayValues = users1.values();

for (const key of nuevoObjetoArrayKeys) {
  console.log(`Soy la key:  ${key}`);
}

console.log("----------------------");

// 11. `values()`
// Devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice en el array.

for (const value of nuevoObjetoArrayValues) {
  console.log(`Soy ${value.name} y tengo ${value.age} años `);
}
console.log("----------------------");

// 12. `entries()`
// Devuelve un nuevo objeto Array Iterator que contiene pares clave/valor para cada índice en el array.
let nuevoObjetoArrayEntries = users1.entries();

for (const [key, value] of nuevoObjetoArrayEntries) {
  console.log(`Soy el ${key}: ${value.name} ${value.age}`);
}
console.log("----------------------");

// 13. `for...of`
// Un bucle que permite recorrer los elementos de un array (y otros objetos iterables).

let colores = ["Azul", "Rojo", "Verde", "Morado"];
for (const color of colores) {
  console.log(`Soy el color: ${color}`);
  if (color == "Morado") {
    console.log(`El color ${color} es mi favorito 💜`);
  }
}
console.log("----------------------");

// 14. `for...in`
// Un bucle que permite recorrer las claves (índices) de un array (aunque es más adecuado para objetos).

let animal = { name: "Manchas", age: 5 };

for (const key in animal) {
  console.log(`${key}: ${animal[key]}`);
}
console.log("----------------------");

// 15. `flat()`
// Devuelve un nuevo array con todos los elementos de sub-array concatenados en él de forma recursiva hasta la profundidad especificada.

let apellidos = [
  ["Perez", "Vásquez"],
  ["Madrid", "Suarez"],
  ["Rodríguez", "Manco"],
];

let apellidosConcatenados = apellidos.flat();
console.log(apellidosConcatenados);

// Estas funciones permiten realizar diversas operaciones en los arrays,
// desde recorrerlos y aplicar funciones a cada elemento, hasta transformarlos y filtrarlos según diferentes criterios.
// Utilizar estas funciones puede hacer que tu código sea más claro, conciso y eficiente.
