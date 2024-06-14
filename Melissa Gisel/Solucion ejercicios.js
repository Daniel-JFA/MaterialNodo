//  Esta guía está diseñada para ayudar a principiantes a fortalecer sus habilidades de pensamiento lógico y comprensión de los conceptos básicos de programación.

// Ejercicio 1: Suma de Dos Números
// Descripción: Escribe una función que tome dos números como argumentos y devuelva su suma.

// Ejercicio 2: Número Par o Impar
// Descripción: Escribe una función que tome un número como argumento y devuelva "par" si el número es par y "impar" si el número es impar.
 

// Ejercicio 3: FizzBuzz
// Descripción: Escribe una función que recorra los números del 1 al 100. Para cada número, imprime "Fizz" si es divisible por 3, "Buzz" si es divisible por 5, y "FizzBuzz" si es divisible por ambos.

// Ejercicio 4: Factorial de un Número
// Descripción: Escribe una función que tome un número como argumento y devuelva su factorial.  

//  Ejercicio 5: Palíndromo
// Descripción: Escribe una función que tome una cadena de texto y determine si es un palíndromo (se lee igual de adelante hacia atrás).

// Ejercicio 6: Encontrar el Máximo en un Array
// Descripción: Escribe una función que tome un array de números y devuelva el número máximo.

// Ejercicio 7: Invertir una Cadena
// Descripción: Escribe una función que tome una cadena de texto y devuelva la cadena invertida.

// Ejercicio 8: Contar Vocales en una Cadena
// Descripción: Escribe una función que tome una cadena de texto y cuente el número de vocales (a, e, i, o, u).

// Ejercicio 9: Encontrar Números Primos
// Descripción: Escribe una función que encuentre todos los números primos hasta un número dado.

// Ejercicio 10: Generar una Secuencia Fibonacci
// Descripción: Escribe una función que genere una secuencia Fibonacci hasta un número dado.


1.
 function SumaDeNumeros(num1,num2) {
return( num1 + num2)

 }

SumaDeNumeros(3,4)

2.
 
 function NumeroParoImpar (numero) {
    if(numero%2===0)
    return("numero par")
 else("numeroimpar")
}
console.log (NumeroParoImpar(4))

3. 



 
 function fizzbuzz () {
   
   for (let i=1 ; i<=100 ; i++){

      if(i%3===0 && i%5===0){
         
         console.log("FIZZBUZZ")

      }else if (i%3===0){
      console.log("fizz")

   }else if(i%5===0){
      
      console.log("buzz")
   }

   else{
      console.log("invalido")
   }
   }
      
 }
 fizzbuzz();


 4.  
    
 function factorial(n) {
   if (n === 0 || n === 1) {
     return 1;
   }
   return n * factorial(n - 1);
   
 }

 console.log(factorial(5))


6.

const lista = [3, 7, 2, 4, 5,7,8];

 function encontrarMaximo(arr) {
   

   return Math.max(...arr); 
}

// ejmplp:
console.log("El máximo del array es:", encontrarMaximo(lista));



8.

function ContarVocales(vocales){
   var vocalesEncontradas = texto.match(/[aeiou]/gi);
   return vocalesEncontradas ? vocalesEncontradas.length : 0;
}
var texto = "HIPOPOTAMO";
var numeroVocales = contarVocales(texto);
console.log("El número de vocales en el texto es: " + numeroVocales);

