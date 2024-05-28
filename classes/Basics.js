// Daniel Jaime Florez Aguirre
//
//
// Breve Guía Teórica de Fundamentos de Programación en JavaScript 

// 1. Scope (Alcance)

// El scope (alcance) en JavaScript se refiere al contexto en el cual las variables y funciones están disponibles para ser accedidas o referenciadas. El scope determina la accesibilidad de variables y funciones en diferentes partes del código.

// Tipos de Scope en JavaScript:

// 1. Scope Global:
// - Las variables declaradas en el scope global son accesibles desde cualquier parte del código, tanto dentro como fuera de cualquier función o bloque.
// - Se declaran fuera de cualquier función o bloque.
// - Si se usa `var` fuera de una función, también se declara en el scope global.

let globalVar = "I'm global";

function showGlobal() {
    console.log(globalVar); // Acceso permitido
}

showGlobal();
console.log(globalVar); // Acceso permitido


// 2. Scope de Función:
// - Las variables declaradas dentro de una función solo son accesibles dentro de esa función.
// - No se pueden acceder fuera de la función.

function myFunction() {
    let functionVar = "I'm inside a function";
    console.log(functionVar); // Acceso permitido
}

myFunction(); //(Para poder ejecutar todo el codigo comentar toda esta linea)
console.log(functionVar); // Error: functionVar is not defined (Para poder ejecutar todo el codigo comentar toda esta linea)

// 3. Scope de Bloque:
// - Introducido en ES6 con `let` y `const`.
// - Las variables declaradas dentro de un bloque `{}` solo están disponibles dentro de ese bloque.
// - Los bloques se encuentran en estructuras de control como `if`, `for`, `while`, etc.

//Este tambien genera error por no tener el acceso desde el bloque, comentar para continuar
 {
     let blockVar = "I'm inside a block";
     console.log(blockVar); // Acceso permitido
 }

 console.log(blockVar); // Error: blockVar is not defined

 if (true) {
    const anotherBlockVar = "I'm also inside a block";
     console.log(anotherBlockVar); // Acceso permitido
 }

 console.log(anotherBlockVar); // Error: anotherBlockVar is not defined


// 2. Tipos de Variables

// JavaScript ofrece tres maneras de declarar variables: `var`, `let`, y `const`. La elección entre ellas depende del comportamiento deseado en términos de scope y reasignación.

// 1. var:
// - Tiene scope de función y puede ser redeclarada y reasignada.
// - Hoisting: Se eleva al inicio de su scope, pero su valor inicial es `undefined`.

 console.log(varVariable); // undefined
 var varVariable = "I'm a var";
 console.log(varVariable); // "I'm a var"


// 2. let:
// - Tiene scope de bloque y puede ser reasignada pero no redeclarada dentro del mismo scope.
// - No sufre hoisting de la misma manera que `var`.

//Para que esta funcione deben comentar la anterio en let, ya que esta usa el aspecto global
//En la linea siguiente se esta tratando de acceder, el error indica que al no haber sido declarada no puede continuar su ejecucion, comentar linea para continuar
//console.log(letVariable); // Error: Cannot access 'letVariable' before initialization
let letVariable = "I'm a let";
console.log(letVariable); // "I'm a let"



// 3. const:
// - Tiene scope de bloque y no puede ser reasignada ni redeclarada.
// - Debe ser inicializada al ser declarada.

const constVariable = "I'm a const";
console.log(constVariable); // "I'm a const"

//La linea siguiente presenta el error de falta de asignacion, comentar para continuar
//constVariable = "New value"; // Error: Assignment to constant variable


// 3. Funciones

// Las funciones son bloques de código diseñados para realizar una tarea específica. Son esenciales para la modularización y reutilización del código.

// Declaración de Funciones:
// - Se utiliza la palabra clave `function` seguida del nombre de la función, paréntesis `()` y un bloque de código `{}`.

function myFunction() {
    console.log("Hello, Noder`s!");
}

myFunction(); // Llama a la función y muestra "Hello, World!"


// Funciones con Parámetros:
// - Permiten recibir valores externos para ser utilizados dentro de la función.

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Muestra "Hello, Alice!"
greet("Bob");   // Muestra "Hello, Bob!"

// Funciones con Valor de Retorno:
// - Utilizan la palabra clave `return` para devolver un valor al lugar donde se llamó a la función.

function add(a, b) {
    return a + b;
}

let sum = add(3, 5);
console.log(sum); // Muestra 8

// Funciones Anónimas y Funciones Flecha:
// - Las funciones anónimas no tienen nombre y se pueden asignar a variables.
// - Las funciones flecha, introducidas en ES6, ofrecen una sintaxis más corta y no tienen su propio `this`.


// Función anónima
let multiply = function(a, b) {
    return a * b;
};

console.log(multiply(2, 3)); // Muestra 6

// Función flecha (introducida en ES6)
let divide = (a, b) => {
    return a / b;
};

console.log(divide(6, 3)); // Muestra 2


// 4. Manejo Básico de Arrays

// Un array es una estructura de datos que permite almacenar múltiples valores en una sola variable. Los arrays en JavaScript son dinámicos y pueden contener elementos de diferentes tipos.

// Declaración e Inicialización:
// - Los arrays se pueden declarar usando corchetes `[]` y se pueden inicializar con una lista de elementos.

let fruits = ["Apple", "Banana", "Cherry"];


// Acceso a Elementos:
// - Los elementos se acceden usando índices, comenzando desde 0.

console.log(fruits[0]); // Muestra "Apple"
console.log(fruits[1]); // Muestra "Banana"
console.log(fruits[2]); // Muestra "Cherry"

// Modificación de Elementos:
// - Los elementos del array se pueden modificar accediendo a ellos mediante su índice.


fruits[1] = "Blueberry";
console.log(fruits); // Muestra ["Apple", "Blueberry", "Cherry"]

// Propiedad length:
// - La propiedad `length` del array devuelve el número de elementos en el array.


console.log(fruits.length); // Muestra 3

// Métodos Comunes de Arrays:

// 1. push(): Agrega uno o más elementos al final del array.
// 2. pop(): Elimina el último elemento del array.
// 3. shift(): Elimina el primer elemento del array.
// 4. unshift(): Agrega uno o más elementos al inicio del array.
// 5. forEach(): Ejecuta una función sobre cada elemento del array.
// 6. map(): Crea un nuevo array con los resultados de aplicar una función a cada elemento del array.
// 7. filter(): Crea un nuevo array con todos los elementos que pasen una prueba (implementada por una función).
// 8. reduce(): Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor.
// 9. find(): Devuelve el primer elemento del array que satisfaga la prueba implementada por la función proporcionada.
// 10. findIndex(): Devuelve el índice del primer elemento del array que satisfaga la prueba implementada por la función proporcionada.
// 11. some(): Prueba si al menos un elemento en el array pasa la prueba implementada por la función proporcionada.
// 12. every(): Prueba si todos los elementos en el array pasan la prueba implementada por la función proporcionada.
