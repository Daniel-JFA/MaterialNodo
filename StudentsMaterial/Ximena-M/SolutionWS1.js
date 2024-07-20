// Esta guía está diseñada para ayudar a principiantes a fortalecer sus habilidades de pensamiento lógico y comprensión de los conceptos básicos de programación.

// Ejercicio 1: Suma de Dos Números
// Descripción: Escribe una función que tome dos números como argumentos y devuelva su suma.
console.log( "Suma") 

function Suma( a, b){
    return(a + b);
}
    let Num1 = 8;
    let Num2 = 9;
    let resultado = Suma(Num1, Num2);
    console.log(+ Num1 +  "+"  + Num2 +  "="  + resultado);

// Ejercicio 2: Número Par o Impar
// Descripción: Escribe una función que tome un número como argumento y devuelva "par" si el número es par y "impar" si el número es impar.

console.log( "Par e Impar") 

function ParImpar(i) {
    if (i % 2 === 0){
        return "par";
     }   else {
        return "impar"
     }
}
console.log(ParImpar(6));
console.log(ParImpar(3));

// Ejercicio 3: FizzBuzz
// Descripción: Escribe una función que recorra los números del 1 al 100. Para cada número, imprime "Fizz" si es divisible por 3, "Buzz" si es divisible por 5, y "FizzBuzz" si es divisible por ambos.

console.log( "FizzBuzz") 

function FizzBuzz() {
    for (let i = 1; i <= 10; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`i =  ${i}  FizzBuzz`);
        }
        else if (i % 3 === 0) {
            console.log(`i =  ${i}  Fizz`);
        }
        else if (i % 5 === 0) {
            console.log(`i =  ${i}  Buzz`);
        }
        else{
            console.log(`${i}  No cumple ninguna condicion`);
        }  
    }

}

FizzBuzz();


// Ejercicio 4: Factorial de un Número
// Descripción: Escribe una función que tome un número como argumento y devuelva su factorial.

console.log( "Factorial") 

function factor(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factor(num - 1));
    }
  }
 console.log(factor(5));
    

// Ejercicio 5: Palíndromo
// Descripción: Escribe una función que tome una cadena de texto y determine si es un palíndromo (se lee igual de adelante hacia atrás).

console.log( "Palindromo") 

function esPalindromo(texto){
  return texto.split("").reverse().join("") == texto;
}
console.log(esPalindromo("anitalavalatina"));
console.log(esPalindromo("revolver"));


// Ejercicio 6: Encontrar el Máximo en un Array
// Descripción: Escribe una función que tome un array de números y devuelva el número máximo.

console.log( "Num maximo") 

const Array = [5 , 7 , 8 , 10]
let maxArray = Math.max (...Array)
console.log(" El valor maximo es:", maxArray)


// Ejercicio 7: Invertir una Cadena
// Descripción: Escribe una función que tome una cadena de texto y devuelva la cadena invertida.

console.log( "Cadena Invertida") 

function alreves(texto) {
    return texto.split("").reverse().join("");    
}
console.log(alreves("migato"));


// Ejercicio 8: Contar Vocales en una Cadena
// Descripción: Escribe una función que tome una cadena de texto y cuente el número de vocales (a, e, i, o, u).

console.log( "Vocales") 

function vocales(texto) {
    let Contar = 0; 
    const vocal = "aeiouAEIOU";
    for (let caracter of texto) {
        if (vocal.includes(caracter)) {
            Contar++;
        }
            }
            return Contar;   
    }
    console.log(vocales("Casa"));


// Ejercicio 9: Encontrar Números Primos
// Descripción:

console.log( "Numeros Primos") 

function obtenerPrimos(numero) {
    if(typeof numero != "number" || !Number.isInteger(numero)) {
        return null;
    }
    let auxiliar = [];
    let primos = [];
    for (let i = 2; i <= numero; ++i) {
        if (!auxiliar[i]) {
            primos.push(i);
            for(let x = i << 1; x <= numero; x += i) {
                auxiliar [x] = true;
            }
        }
    }
    return primos;
    }
console.log(obtenerPrimos(16));

// Ejercicio 10: Generar una Secuencia Fibonacci
// Descripción: Escribe una función que genere una secuencia Fibonacci hasta un número dado.

console.log( "Ejercicio Fibonacci")    

function Fibonacci(limit) {
    const fib = [0 , 1]
    for (let i = 2; i <= limit; i++){
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}
const testFib = Fibonacci(10)
console.log(testFib);
