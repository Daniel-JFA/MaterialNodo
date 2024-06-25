// Esta guía está diseñada para ayudar a principiantes a fortalecer sus habilidades de pensamiento lógico y comprensión de los conceptos básicos de programación.

// Ejercicio 1: Suma de Dos Números
// Descripción: Escribe una función que tome dos números como argumentos y devuelva su suma.
function isNumber(number) {
    if ( typeof number === "number")
        return true;
    return false;
}

function sumTwoNumbers(num1, num2) {
    if (isNumber(num1) && isNumber(num2))
        return num1 + num2;
    return "argumentos no validos";
}

//console.log(sumTwoNumbers(1,5))
//console.log(sumTwoNumbers(1,"4"))
//console.log(sumTwoNumbers(1,"siete"))

// Ejercicio 2: Número Par o Impar
// Descripción: Escribe una función que tome un número como argumento y devuelva "par" si el número es par y "impar" si el número es impar.
function isOddNumber(number) {
    if (isNumber(number))
        if(number % 2 !== 0)
            return "Impar";
        else
            return "Par";
    return "El argumento no es un numero";
}

// console.log(isOddNumber(4))
// console.log(isOddNumber(7))
// console.log(isOddNumber(false))
// console.log(isOddNumber("par"))


// Ejercicio 3: FizzBuzz
// Descripción: Escribe una función que recorra los números del 1 al 100. Para cada número, imprime "Fizz" si es divisible por 3, "Buzz" si es divisible por 5, y "FizzBuzz" si es divisible por ambos.
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if ( i % 3 === 0 && i % 5 === 0)
            console.log("FizzBuzz");
        else if (i % 3 === 0)
            console.log("Fizz");
        else if (i % 5 === 0) 
            console.log("Buzz");
        else
            console.log(i);
    }
}

//fizzBuzz()

// Ejercicio 4: Factorial de un Número
// Descripción: Escribe una función que tome un número como argumento y devuelva su factorial.

function factorial(number) {
    if (isNumber(number)) {
        let total = 1;
        for (let i = 1 ; i <= number; i++) {
            total *= i;
        }
        return total;
    }
    return "el argumento no es un numero";
}

//console.log(factorial(5))


// Ejercicio 5: Palíndromo
// Descripción: Escribe una función que tome una cadena de texto y determine si es un palíndromo (se lee igual de adelante hacia atrás).

function palindrome(string) {
    let lastCharacterIndex = string.length - 1;
    for (let i = 0 ; i <= string.length/2; i++) {
        if (string[i] !== string[lastCharacterIndex]) 
            return `la palabra "${string}" no es un palindromo`;
        lastCharacterIndex--;

    }
    return `la palabra "${string}" es un palindromo`;

}

//console.log(palindrome("rallar"))


// Ejercicio 6: Encontrar el Máximo en un Array
// Descripción: Escribe una función que tome un array de números y devuelva el número máximo.

function maxNumber(array) {
    if(array.every(current => isNumber(current)))
        return Math.max(...array);
    return "Un elemento del arreglo no es un numero";
}

//console.log(maxNumber([1,2,3,4,5,66,7,'sdfsdf',87,878]))
//console.log(maxNumber([232,23445,232,2344,211,77]))

// Ejercicio 7: Invertir una Cadena
// Descripción: Escribe una función que tome una cadena de texto y devuelva la cadena invertida.

function revertString(string) {
    let reverse = [...string].reverse().join('');
    return reverse;
}

//console.log(revertString("me llamo jaime"))

// Ejercicio 8: Contar Vocales en una Cadena
// Descripción: Escribe una función que tome una cadena de texto y cuente el número de vocales (a, e, i, o, u).
function countVocals(string) {
    let vocals = {'a':1,'e':1,'i':1,'o':1,'u':1};
    let total = 0;
    for(let character of string) {
        if(vocals[character])
            total++;
    }
    return total;
}    

// console.log(countVocals("jaime"))
// console.log(countVocals("aeiou"))

// Ejercicio 9: Encontrar Números Primos
// Descripción: Escribe una función que encuentre todos los números primos hasta un número dado.

function primeNumbers(limit) {
    //iterar los numeros
    //en cada numero crear otra iteracion desde 1 hasta el numero actual 
    //validar que si tiene mas de dos residuales iguales a 0 no es primo
    //en caso de tener solo 2 se procede a agregarlo al arreglo
    //devolver valor
    if(!isNumber(limit))
        return "No es un numero";
    let primes = [];
    for (let i = 1; i <= limit; i++) {
        let residualIsZero = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0)
                residualIsZero++;        
        }
        if (residualIsZero === 2)
            primes.push(i);
    }
    return primes;
}
//console.log(primeNumbers(100))

// Ejercicio 10: Generar una Secuencia Fibonacci
// Descripción: Escribe una función que genere una secuencia Fibonacci hasta un número dado.

function fibonacci(limit) {
    //recursion mi viejo nemesis, lo dejo pendiente para el proximo commit
}
