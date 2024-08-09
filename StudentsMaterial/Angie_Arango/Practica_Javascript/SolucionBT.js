// Ejercicio 1: Suma de Dos Números
// Descripción: Escribe una función que tome dos números como argumentos y devuelva su suma.

function sumaDosNumeros(numero1, numero2) {
  return numero1 + numero2;
}

const resultadoSuma = sumaDosNumeros(5, 3);
console.log("La suma de los números es:", resultadoSuma);

// Ejercicio 2: Número Par o Impar
// Descripción: Escribe una función que tome un número como argumento y devuelva "par" si el número es par y "impar" si el número es impar. -->

function esParOImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

const tipoNumero = esParOImpar(7);
console.log("El número es:", tipoNumero);

// Ejercicio 3: FizzBuzz
// Descripción: Escribe una función que recorra los números del 1 al 100. Para cada número, imprime "Fizz" si es divisible por 3, "Buzz" si es divisible por 5, y "FizzBuzz" si es divisible por ambos.

function fizzBuzz() {
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

fizzBuzz();

// Ejercicio 4: Factorial de un Número
// Descripción: Escribe una función que tome un número como argumento y devuelva su factorial.

function factorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }
  let resultadoFcatorial = 1;
  for (let i = 2; i <= numero; i++) {
    resultadoFcatorial *= i;
  }
  return resultadoFcatorial;
}

const resultadoFactorial = factorial(5);
console.log("El factorial de 5 es:", resultadoFactorial);

// Ejercicio 5: Palíndromo
// Descripción: Escribe una función que tome una cadena de texto y determine si es un palíndromo (se lee igual de adelante hacia atrás).

function esPalindromo(text) {
  const normalizedText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  const reversedText = normalizedText.split("").reverse().join("");

  if (normalizedText === reversedText) {
    return `${text} es un palíndromo`;
  } else {
    return `${text} no es un palíndromo`;
  }
}

console.log(esPalindromo("reconocer"));
console.log(esPalindromo("oso"));
console.log(esPalindromo("anilina"));
console.log(esPalindromo("murcielago"));
console.log(esPalindromo("banco"));
console.log(esPalindromo("nivel"));

// Ejercicio 6: Encontrar el Máximo en un Array
// Descripción: Escribe una función que tome un array de números y devuelva el número máximo.

function encontrarMaximo(array) {
  if (array.length === 0) {
    return "El array está vacío";
  }
  let maximo = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maximo) {
      maximo = array[i];
    }
  }

  return `El número máximo del array es ${maximo}`;
}

console.log(encontrarMaximo([10, 20, 40, 60]));
console.log(encontrarMaximo([5, 15, 25, 35]));

// Ejercicio 7: Invertir una Cadena
// Descripción: Escribe una función que tome una cadena de texto y devuelva la cadena invertida.
function invertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}

console.log(invertirCadena("hola")); // "aloh"
console.log(invertirCadena("JavaScript")); // "tpircSavaJ"

// Ejercicio 8: Contar Vocales en una Cadena
// Descripción: Escribe una función que tome una cadena de texto y cuente el número de vocales (a, e, i, o, u).
function contarVocales(cadena) {
  let vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];

  cadena = cadena.toLowerCase();

  let numeroVocales = 0;

  for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(cadena[i])) {
      numeroVocales++;
    }
  }

  console.log(`El número de vocales en "${cadena}" es ${numeroVocales}`);
}

contarVocales("programar");
contarVocales("murciélago");

// Ejercicio 9: Encontrar Números Primos
// Descripción: Escribe una función que encuentre todos los números primos hasta un número dado.

function encontrarPrimos(max) {
  const primos = [];
  for (let num = 2; num <= max; num++) {
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        esPrimo = false;
        break;
      }
    }
    if (esPrimo) primos.push(num);
  }
  return primos;
}

console.log(encontrarPrimos(10));
console.log(encontrarPrimos(20));

// Ejercicio 10: Generar una Secuencia Fibonacci
// Descripción: Escribe una función que genere una secuencia Fibonacci hasta un número dado.
function generarFibonacci(max) {
  const secuencia = [0, 1];
  while (true) {
    const siguiente =
      secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
    if (siguiente > max) break;
    secuencia.push(siguiente);
  }
  return secuencia;
}

console.log(generarFibonacci(10));
console.log(generarFibonacci(20));
