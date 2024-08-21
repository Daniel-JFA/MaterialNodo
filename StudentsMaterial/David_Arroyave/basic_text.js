// Esta guía está diseñada para ayudar a principiantes a fortalecer sus habilidades de pensamiento lógico y comprensión de los conceptos básicos de programación.

// Ejercicio 1: Suma de Dos Números
// Descripción: Escribe una función que tome dos números como argumentos y devuelva su suma.
function adicion(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}
console.log("resultados ejercicio suma: ", adicion(1, 6));

// Ejercicio 2: Número Par o Impar
// Descripción: Escribe una función que tome un número como argumento y devuelva "par" si el número es par y "impar" si el número es impar.
function argumento(numero) {
  let resultado = numero % 2;
  if (resultado === 0) {
    return "par";
  } else {
    return "impar";
  }
}
let valor = 325;
console.log("el resultado del numero", valor, "es", argumento(valor));

// Ejercicio 3: FizzBuzz
// Descripción: Escribe una función que recorra los números del 1 al 100. Para cada número, imprime "Fizz" si es divisible por 3, "Buzz" si es divisible por 5, y "FizzBuzz" si es divisible por ambos.
function valores() {
  for (let i = 1; i < 101; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}
console.log(valores());

// Ejercicio 4: Factorial de un Número
// Descripción: Escribe una funcióna que tome un número como argumento y devuelva su factorial.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
let valorfact = 7;
let resultadofact = factorial(valorfact);
console.log("El valor factorial del numero", valorfact, "es: ", resultadofact);

// Ejercicio 5: Palíndromo
// Descripción: Escribe una función que tome una cadena de texto y determine si es un palíndromo (se lee igual de adelante hacia atrás).
let palabra = "Tomate";
let longitud = palabra.length - 1;
function palindromo(valor) {
  for (let i = 0; i < valor.length; i++) {
    if (valor[i] !== valor[longitud]) {
      return "no es un palindromo";
    }
    longitud--;
    return "es un palindromo";
  }
}
console.log(palabra, palindromo(palabra));

// Ejercicio 6: Encontrar el Máximo en un Array
// Descripción: Escribe una función que tome un array de números y devuelva el número máximo.
let arrays = [];
const tamañoArray = 10;
const rangoMaximo = 1000;
for (let i = 0; i < tamañoArray; i++) {
  arrays.push(Math.floor(Math.random() * rangoMaximo));
}
const maximo = Math.max(...arrays);
console.log("Del bloque de arrays:", arrays, "su numero maximo es: ", maximo);

// Ejercicio 7: Invertir una Cadena
// Descripción: Escribe una función que tome una cadena de texto y devuelva la cadena invertida.
function invertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}
let cadenaOriginal = "programación";
let cadenaInvertida = invertirCadena(cadenaOriginal);
console.log(cadenaInvertida);

// Ejercicio 8: Contar Vocales en una Cadena
// Descripción: Escribe una función que tome una cadena de texto y cuente el número de vocales (a, e, i, o, u).
function contarVocales(cadena) {
  cadena = cadena.toLowerCase();
  let vocales = ["a", "e", "i", "o", "u"];
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(cadena[i])) {
      contador++;
    }
  }
  return contador;
}
let cadenaTexto = "Programacion";
let numeroVocales = contarVocales(cadenaTexto);
console.log(numeroVocales);

// Ejercicio 9: Encontrar Números Primos
// Descripción: Escribe una función que encuentre todos los números primos hasta un número dado.
function esPrimo(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function encontrarPrimos(hasta) {
  let primos = [];
  for (let i = 2; i <= hasta; i++) {
    if (esPrimo(i)) {
      primos.push(i);
    }
  }
  return primos;
}
let hasta = 60;
let numerosPrimos = encontrarPrimos(hasta);
console.log(numerosPrimos);

// Ejercicio 10: Generar una Secuencia Fibonacci
// Descripción: Escribe una función que genere una secuencia Fibonacci hasta un número dado.
function generarFibonacci(hasta) {
    let secuencia = [0, 1];
    while (true) {
        let siguiente = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
        if (siguiente > hasta) break;
        secuencia.push(siguiente);
    }
    return secuencia;
}
let lim = 100;
let secuenciaFibonacci = generarFibonacci(lim);
console.log(secuenciaFibonacci); 
