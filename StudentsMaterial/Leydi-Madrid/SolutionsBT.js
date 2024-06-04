// Esta guía está diseñada para ayudar a principiantes a fortalecer sus habilidades de pensamiento lógico y comprensión de los conceptos básicos de programación.

// Ejercicio 1: Suma de Dos Números
// Descripción: Escribe una función que tome dos números como argumentos y devuelva su suma.

function Suma(sum1, sum2) {
  let resultado = sum1 + sum2;
  console.log(resultado);
}

Suma(5, 10);
console.log("----------------------------------------------------");

function Suma1(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}
console.log(Suma1(3, 6));
console.log("----------------------------------------------------");

// Ejercicio 2: Número Par o Impar
// Descripción: Escribe una función que tome un número como argumento y devuelva "par" si el número es par y "impar" si el número es impar.

function NumParImpar(num) {
  if (num % 2 === 0) {
    return `El número ${num} es par`;
  } else {
    return `El número ${num} es impar`;
  }
}

console.log(NumParImpar(5));
console.log("----------------------------------------------------");

// Ejercicio 3: FizzBuzz
// Descripción: Escribe una función que recorra los números del 1 al 100. Para cada número, imprime "Fizz" si es divisible por 3, "Buzz" si es divisible por 5, y "FizzBuzz" si es divisible por ambos.

function FizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`i = ${i} FizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`i = ${i} Fizz`);
    } else if (i % 5 === 0) {
      console.log(`i = ${i} Buzz`);
    } else {
      console.log(`i = ${i} No cumple ninguna condición`);
    }
  }
}

FizzBuzz();
console.log("----------------------------------------------------");

// Ejercicio 4: Factorial de un Número
// Descripción: Escribe una función que tome un número como argumento y devuelva su factorial.

function NumFactorial(num) {
  let resultado = 1;
  for (let i = num; i > 0; i--) {
    resultado *= i;
  }
  console.log(resultado);
}

NumFactorial(5);
console.log("----------------------------------------------------");

// Ejercicio 5: Palíndromo
// Descripción: Escribe una función que tome una cadena de texto y determine si es un palíndromo (se lee igual de adelante hacia atrás).

function TextPalindromo(text) {
  let TextArray = text.split("");
  let ArrayInvertido = TextArray.reverse();
  if (ArrayInvertido == TextArray) {
    return `${TextArray} es un palíndromo`;
  } else {
    return `${TextArray} no es un palíndromo`;
  }
}

console.log(TextPalindromo("asa"));
console.log("----------------------------------------------------");

// Ejercicio 6: Encontrar el Máximo en un Array
// Descripción: Escribe una función que tome un array de números y devuelva el número máximo.

function MaxArray() {
  let MaxArray = [10, 20, 40, 60];
  let NumMayor = MaxArray[0];
  for (let i = 0; i < MaxArray.length; i++) {
    if (NumMayor < MaxArray[i]) {
      NumMayor = MaxArray[i];
    }
  }
  console.log(`El número máximo del array es ${NumMayor}`);
}

MaxArray();
console.log("----------------------------------------------------");

//Practicando forEach
let MaxArray2 = [10, 20, 40, 60];
MaxArray2.forEach((element) => {
  if (element < MaxArray2) {
    element = MaxArray2;
  }
  console.log(`El número máximo del array es ${element}`);
});

console.log("----------------------------------------------------");

// Ejercicio 7: Invertir una Cadena
// Descripción: Escribe una función que tome una cadena de texto y devuelva la cadena invertida.

function CadenaInvertida(text) {
  let cadenaVector = text.split("");
  let cadenaInvertida = cadenaVector.reverse();
  return `Esta es la cadena invertida ${cadenaInvertida}`;
}

console.log(CadenaInvertida("corazón"));
console.log("----------------------------------------------------");

//Practicando otra opción

function TextInvertido(text) {
  let textInvertido = text.split("").reverse();
  return `Este es el texto invertido ${textInvertido}`;
}

console.log(TextInvertido("Samuel"));
console.log("----------------------------------------------------");

// Ejercicio 8: Contar Vocales en una Cadena
// Descripción: Escribe una función que tome una cadena de texto y cuente el número de vocales (a, e, i, o, u).

//Esta función me dio pero solo está tomando las primeras vocales en su posición el resto no las lee.
function ContarVocales(cadena) {
  let palabra = cadena.toLowerCase();
  let vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
  let numeroVocales = 0;
  for (let i = 0; i < palabra.length; i++) {
    if (cadena.includes(vocales[i])) {
      numeroVocales++;
    }
  }
  if (numeroVocales > 0) {
    console.log(`El número de vocales de ${palabra} es ${numeroVocales}`);
  } else {
    console.log(`La palabra ${palabra} no tiene vocales`);
  }
}

ContarVocales("Vocalees");
console.log("----------------------------------------------------");

//Como la anterior no me lee el resto de vocales que agrego, investigué y vi esta solución
function ContarVocales2(cadena) {
  let palabra = cadena;
  let vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
  let numeroVocales = 0;
  for (let i = 0; i < palabra.length; i++) {
    for (let j = 0; j < vocales.length; j++) {
      if (palabra[i] === vocales[j]) {
        numeroVocales++;
      }
    }
  }
  if (numeroVocales > 0) {
    console.log(`El número de vocales de ${palabra} es ${numeroVocales}`);
  } else {
    console.log(`La palabra ${palabra} no tiene vocales`);
  }
}

ContarVocales2("vocalees");
console.log("----------------------------------------------------");

// Ejercicio 9: Encontrar Números Primos
// Descripción: Escribe una función que encuentre todos los números primos hasta un número dado.

// Ejercicio 10: Generar una Secuencia Fibonacci
// Descripción: Escribe una función que genere una secuencia Fibonacci hasta un número dado.
