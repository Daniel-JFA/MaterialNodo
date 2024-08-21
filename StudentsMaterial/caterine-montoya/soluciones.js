// Esta guía está diseñada para ayudar a principiantes a fortalecer sus habilidades de pensamiento lógico y comprensión de los conceptos básicos de programación.

// Ejercicio 1: Suma de Dos Números
// Descripción: Escribe una función que tome dos números como argumentos y devuelva su suma.

function sumar(numero1,numero2) {return numero1+numero2

    
}
let numero1 = 4
let numero2 = 1
sumar(numero1,munero2)
console.log=sumar(4+1)

// Ejercicio 2: Número Par o Impar
// Descripción: Escribe una función que tome un número como argumento y devuelva "par" si el número es par y "impar" si el número es impar.

function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}


// Ejercicio 3: FizzBuzz
// Descripción: Escribe una función que recorra los números del 1 al 100. Para cada número, imprime "Fizz" si es divisible por 3, "Buzz" si es divisible por 5, y "FizzBuzz" si es divisible por ambos.

// Ejercicio 4: Factorial de un Númerofunction fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

 Llamada a la función
fizzBuzz();
// Descripción: Escribe una función que tome un número como argumento y devuelva su factorial.
function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
// Ejercicio 5: Palíndromo
// Descripción: Escribe una función que tome una cadena de texto y determine si es un palíndromo (se lee igual de adelante hacia atrás).

// Ejercicio 6: Encontrar el Máximo en un Array
// Descripción: Escribe una función que tome un array de números y devuelva el número máximo.

// Ejercicio 7: Invertir una Cadena
// Descripción: Escribe una función que tome una cadena de texto y devuelva la cadena invertida.

// Ejercicio 8: Contar Vocales en una Cadena
// Descripción: Escribe una función que tome una cadena de texto y cuente el número de vocales (a, e, i, o, u).
function contarVocales(cadena) {
    let contador = 0;
    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; 
    
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }
    
    return contador;
}

// Ejercicio 9: Encontrar Números Primos
// Descripción: Escribe una función que encuentre todos los números primos hasta un número dado.

// Ejercicio 10: Generar una Secuencia Fibonacci
// Descripción: Escribe una función que genere una secuencia Fibonacci hasta un número dado.
function generarFibonacci(hastaNumero) {
    let secuencia = [0, 1]; // Inicializamos la secuencia con los dos primeros números de Fibonacci

    while (true) {
        let siguienteNumero = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
        if (siguienteNumero > hastaNumero) {
            break; 
        }
        secuencia.push(siguienteNumero); 
    }

    return secuencia;
}