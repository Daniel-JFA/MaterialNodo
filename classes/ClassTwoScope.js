// El scope (alcance) en  se refiere al contexto en el cual las variables y funciones están disponibles para ser accedidas o referenciadas. 
// Comprender el scope es fundamental para evitar errores y escribir código eficaz y limpio. Hay tres tipos principales de scope en : global, de función y de bloque.

// Scope Global: Variables accesibles desde cualquier parte del código.
// Scope de Función: Variables accesibles solo dentro de la función donde se declaran.
// Scope de Bloque: Variables accesibles solo dentro del bloque donde se declaran (usando let y const).
// Hoisting: Las declaraciones se mueven al inicio de su scope, pero solo var puede ser utilizada antes de la declaración (con valor undefined).
// Scope Léxico: Las funciones anidadas tienen acceso al scope de sus funciones exteriores.
// Comprender estos conceptos te ayudará a escribir código más limpio y evitar errores comunes relacionados con el acceso y manipulación de variables.



// Tipos de Scope
// Scope Global:

// Las variables declaradas en el scope global están disponibles en cualquier parte del código, tanto dentro como fuera de cualquier función o bloque.
// Se declaran fuera de cualquier función o bloque.
// Si se usa var fuera de una función, también se declara en el scope global.


let globalVariable = "I'm global";

function showGlobal() {
    console.log(globalVariable); // Acceso permitido
}

showGlobal();
console.log(globalVariable); // Acceso permitido
// Scope de Función:

// Las variables declaradas dentro de una función solo están disponibles dentro de esa función.
// No se pueden acceder fuera de la función.


function myFunction() {
    let functionVariable = "I'm inside a function";
    console.log(functionVariable); // Acceso permitido
}

myFunction();
console.log(functionVariable); // Error: functionVariable is not defined
// Scope de Bloque:

// Introducido en ES6 con let y const.
// Las variables declaradas dentro de un bloque {} solo están disponibles dentro de ese bloque.
// Los bloques se encuentran en estructuras de control como if, for, while, etc.


{
    let blockVariable = "I'm inside a block";
    console.log(blockVariable); // Acceso permitido
}

console.log(blockVariable); // Error: blockVariable is not defined

if (true) {
    const anotherBlockVariable = "I'm also inside a block";
    console.log(anotherBlockVariable); // Acceso permitido
}

console.log(anotherBlockVariable); // Error: anotherBlockVariable is not defined
// Scope y Hoisting
// El hoisting (elevación) es el comportamiento por el cual las declaraciones de variables y funciones se mueven al comienzo de su scope antes de la ejecución del código. Es importante entender cómo afecta el scope:

// Variables Declaradas con var:

// Las variables declaradas con var se elevan al inicio de su función o contexto global, pero no se inicializan. Tienen un valor undefined hasta que se asigna un valor explícitamente.


console.log(hoistedVar); // undefined
var hoistedVar = "I'm hoisted";
console.log(hoistedVar); // "I'm hoisted"
// Variables Declaradas con let y const:

// Las variables declaradas con let y const también se elevan, pero no se pueden acceder antes de la declaración debido a la "zona temporal muerta".


console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I'm not hoisted like var";
console.log(hoistedLet); // "I'm not hoisted like var"
// Scope y Funciones Anidadas
// Las funciones anidadas tienen acceso al scope de las funciones exteriores:



function outerFunction() {
    let outerVar = "I'm outside";

    function innerFunction() {
        let innerVar = "I'm inside";
        console.log(outerVar); // Acceso permitido
        console.log(innerVar); // Acceso permitido
    }

    innerFunction();
    console.log(innerVar); // Error: innerVar is not defined
}

outerFunction();
// Scope Léxico (Lexical Scope)
//  usa el scope léxico, lo que significa que el scope de una variable se determina por su posición dentro del código fuente. Las funciones anidadas pueden acceder a las variables de sus funciones exteriores debido a este scope léxico.



function outerFunction() {
    let outerVar = "I'm outside";

    function innerFunction() {
        console.log(outerVar); // Acceso permitido
    }

    return innerFunction;
}

const inner = outerFunction();
inner(); // "I'm outside"

